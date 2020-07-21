import Shop from '../../models/shop';
import Product from '../../models/product';

export default {
  products: async ({ query = '' }) => {
    const products = await Product.find({
      productTitle: { $regex: query, $options: 'i' },
    }).lean();
    return products;
  },

  product: async ({ id }) => {
    const product = await Product.findById(id)
      .lean()
      .populate({
        path: 'shop',
        populate: { path: 'owner', select: '-password -role -age' },
      });
    return product;
  },

  createProduct: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const shop = await Shop.findById(args.shop, (err, res) => {
      if (err) throw new Error('Shop not found');
      return res;
    })
      .lean()
      .populate({ path: 'account' });
    if (req.userId !== `${shop.owner._id}`) throw new Error('Unauthorized');

    const newProduct = new Product({ ...args });
    await newProduct.save();
    const products = await Product.find({ shop: args.shop });

    return products;
  },
};
