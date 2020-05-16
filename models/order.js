import mongoose from 'mongoose';
const ObjectID = mongoose.Schema.Types.ObjectId;

const orderSchema = mongoose.Schema({
  buyerId: {
    type: ObjectID,
    required: true,
  },
  shopId: {
    type: ObjectID,
    required: true,
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
