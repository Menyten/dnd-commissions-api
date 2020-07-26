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
    const shop = new Shop({ ...args, owner: req.userId });
    const result = await shop.save().catch(e => {
      throw new Error('Error creating shop');
    });
    user.role = 'shopkeeper';
    user.shopId = shop._id;
    await user.save();
    return result;
  },

  shop: async ({ id }) => {
    const shop = await Shop.findById(id, (err, res) => {
      if (err) throw new Error('Shop not found');
      return res;
    }).lean();
    if (!shop) throw new Error('Shop not found');

    const owner = await Account.findById(shop.owner).lean().populate({
      path: 'account',
    });

    const products = await Product.find({ shop: id }, (err, res) => {
      if (err) throw new Error('Something went wrong finding products');
      return res;
    });

    const displayProducts = await DisplayProduct.find({ id }, (err, res) => {
      if (err) throw new Error('Something went wrong finding display products');
      return res;
    });

    return { ...shop, products, displayProducts, owner };
  },

  updateShop: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const shop = await Shop.findById(args.shopId).catch(() => {
      throw new Error('Shop not found');
    });
    if (req.userId !== `${shop.owner}`) throw new Error('Unauthorized');
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
};
