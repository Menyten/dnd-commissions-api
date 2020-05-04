import Account from '../../models/account';
import Shop from '../../models/shop';

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
      .catch(err => {
        if (err) throw new Error('Shop not found');
      });
    if (!shop) throw new Error('Shop not found');
    return shop;
  },
  updateShop: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const shop = await Shop.findById(args.shopId);
    if (req.userId !== `${shop.shopkeeperId}`) throw new Error('Unauthorized');
    const updatedShop = await Shop.findByIdAndUpdate(
      args.shopId,
      { ...args },
      { new: true }
    )
      .lean()
      .catch(err => {
        if (err) throw new Error('Error updating shop');
      });
    return updatedShop;
  },
};
