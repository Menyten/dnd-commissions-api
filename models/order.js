import mongoose from 'mongoose';
const ObjectID = mongoose.Schema.Types.ObjectId;

const orderSchema = mongoose.Schema({
  buyerId: {
    type: ObjectID,
    required: true,
    ref: 'Account',
  },
  shop: {
    type: ObjectID,
    required: true,
    ref: 'Shop',
  },
  price: {
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
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
