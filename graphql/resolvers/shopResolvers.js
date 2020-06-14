import Account from '../../models/account';
import Shop from '../../models/shop';
import Product from '../../models/product';
import DisplayProduct from '../../models/displayProduct';

export default {
  createShop: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const user = await Account.findById(req.userId);
    if (user.role === 'shopkeeper')
      throw new Error('You can only have one shop!');
    const shop = new Shop({ ...args.shopInput, shopkeeperId: req.userId });
    const result = await shop.save().catch(() => {
      throw new Error('Error creating shop');
    });
    user.role = 'shopkeeper';
    await user.save();
    return result;
  },

  fetchShop: async ({ shopId }) => {
    const shop = await Shop.findById(shopId, (err, res) => {
      if (err) throw new Error('Shop not found');
      return res;
    }).lean();
    if (!shop) throw new Error('Shop not found');

    const owner = await Account.findById(shop.owner).lean().populate({
      path: 'account',
    });

    const products = await Product.find({ shopId }, (err, res) => {
      if (err) throw new Error('Something went wrong finding products');
      return res;
    });

    const displayProducts = await DisplayProduct.find(
      { shopId },
      (err, res) => {
        if (err)
          throw new Error('Something went wrong finding display products');
        return res;
      }
    );

    return { ...shop, products, displayProducts, owner };
  },

  updateShop: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const shop = await Shop.findById(args.shopId).catch(() => {
      throw new Error('Shop not found');
    });
    if (req.userId !== `${shop.shopkeeperId}`) throw new Error('Unauthorized');
    const updatedShop = await Shop.findByIdAndUpdate(
      args.shopId,
      { ...args },
      { new: true }
    )
      .lean()
      .catch(() => {
        throw new Error('Error updating shop');
      });
    return updatedShop;
  },

  createProduct: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const shop = await Shop.findById(args.shopId, (err, res) => {
      if (err) throw new Error('Shop not found');
      return res;
    });
    if (req.userId !== `${shop.shopkeeperId}`) throw new Error('Unauthorized');

    const newProduct = new Product({ ...args });
    await newProduct.save();
    const products = await Product.find({ shopId: args.shopId });

    return products;
  },

  createDisplayProduct: async (
    { displayProductInput: { shopId, image, description } },
    req
  ) => {
    if (!req.isAuth) throw new Error('Unauthorized');

    const shop = await Shop.findById(shopId, (err, res) => {
      if (err) throw new Error('Shop not found');
      return res;
    });
    if (req.userId !== `${shop.shopkeeperId}`) throw new Error('Unauthorized');

    const newDisplayProduct = new DisplayProduct({
      shopId,
      image,
      description,
    });

    await newDisplayProduct.save().catch(() => {
      throw new Error('Error creating display product');
    });

    const displayProducts = await DisplayProduct.find({ shopId }).lean();

    return displayProducts;
  },
};
