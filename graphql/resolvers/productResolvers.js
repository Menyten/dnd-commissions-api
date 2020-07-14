import Shop from '../../models/shop';
import Product from '../../models/product';
import DisplayProduct from '../../models/displayProduct';

export default {
  fetchProducts: async ({ query = '' }) => {
    const products = await Product.find({
      productTitle: { $regex: query, $options: 'i' },
    }).lean();
    return products;
  },

  fetchProduct: async ({ productId }) => {
    const product = await Product.findById(productId).lean();
    return product;
  },

  createProduct: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const shop = await Shop.findById(args.shopId, (err, res) => {
      if (err) throw new Error('Shop not found');
      return res;
    })
      .lean()
      .populate({ path: 'account' });
    if (req.userId !== `${shop.owner._id}`) throw new Error('Unauthorized');

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
