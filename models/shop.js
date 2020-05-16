import mongoose from 'mongoose';
const ObjectID = mongoose.Schema.Types.ObjectId;

const shopSchema = mongoose.Schema(
  {
    shopkeeperId: {
      type: ObjectID,
      ref: 'Account',
      required: true,
    },
    shopTitle: {
      type: String,
      required: true,
    },
    shopDescription: {
      type: String,
      required: true,
    },
    shopImage: {
      type: String,
    },
    products: {
      type: [ObjectID],
      ref: 'Product',
    },
    finishedOrders: {
      type: [ObjectID],
      ref: 'Order',
    },
    currentOrders: {
      type: [ObjectID],
      ref: 'Order',
    },
    displayProducts: {
      type: [ObjectID],
      ref: 'DisplayProduct',
    },
    ratings: {
      type: [Number],
    },
    reviews: {
      type: [ObjectID],
      ref: 'Review',
    },
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model('Shop', shopSchema);

export default Shop;
