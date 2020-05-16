import mongoose from 'mongoose';
const ObjectID = mongoose.Schema.Types.ObjectId;

const displayProductSchema = mongoose.Schema({
  shopId: {
    type: ObjectID,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const DisplayProduct = mongoose.model('DisplayProduct', displayProductSchema);

export default DisplayProduct;
