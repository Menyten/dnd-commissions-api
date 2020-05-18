import mongoose from 'mongoose';
const ObjectID = mongoose.Schema.Types.ObjectId;

const orderSchema = mongoose.Schema(
  {
    buyerId: {
      type: ObjectID,
      required: true,
      ref: 'Account',
    },
    shopId: {
      type: ObjectID,
      required: true,
      ref: 'Shop',
    },
    products: {
      type: [ObjectID],
      required: true,
      ref: 'Product',
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    orderDescription: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Not started',
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
