import Account from '../../models/account';
import Shop from '../../models/shop';
import DisplayProduct from '../../models/displayProduct';

export default {
  createShop: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const user = await Account.findById(req.userId);
    if (user.role === 'shopkeeper')
      throw new Error('You can only have one shop!');
    const shop = new Shop({ ...args.shopInput });
    const result = await shop.save().catch(error => {
      throw new Error(error);
    });
    user.role = 'shopkeeper';
    await user.save();
    return result;
  },

  fetchShop: async ({ shopId }) => {
    console.log(shopId);
    const shop = await Shop.findById(shopId)
      .lean()
      .catch(() => {
        throw new Error('Shop not found');
      });
    if (!shop) throw new Error('Shop not found');
    return shop;
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

  createDisplayProduct: async (
    { displayProductInput: { shopId, image, description } },
    req
  ) => {
    if (!req.isAuth) throw new Error('Unauthorized');

    const shop = await Shop.findById(shopId).catch(() => {
      throw new Error('Shop not found');
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
