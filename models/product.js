import mongoose from 'mongoose';
const ObjectID = mongoose.Schema.Types.ObjectId;

const productSchema = mongoose.Schema({
  shop: {
    type: ObjectID,
    required: true,
    ref: 'Shop',
  },
  productTitle: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
