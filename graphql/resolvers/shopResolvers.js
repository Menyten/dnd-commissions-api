import Account from '../../models/account';
import Shop from '../../models/shop';
import ExampleProject from '../../models/exampleProject';

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

  addExampleProject: async (
    { exampleProjectInput: { shopId, image, description } },
    req
  ) => {
    if (!req.isAuth) throw new Error('Unauthorized');

    const shop = await Shop.findById(shopId).catch(() => {
      throw new Error('Shop not found');
    });
    if (req.userId !== `${shop.shopkeeperId}`) throw new Error('Unauthorized');

    const newExampleProject = new ExampleProject({
      shopId,
      image,
      description,
    });
    const savedExampleProject = await newExampleProject.save().catch(() => {
      throw new Error('Error creating example project');
    });
    shop.examplesToDisplay = [
      ...shop.examplesToDisplay,
      savedExampleProject._id,
    ];
    await shop.save();
    const updatedShop = await Shop.findById(shop._id)
      .populate({ path: 'examplesToDisplay', model: 'ExampleProject' })
      .exec();
    return updatedShop;
  },
};
