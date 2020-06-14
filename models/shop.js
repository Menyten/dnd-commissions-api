import mongoose from 'mongoose';
const ObjectID = mongoose.Schema.Types.ObjectId;

const shopSchema = mongoose.Schema(
  {
    owner: {
      type: ObjectID,
      required: true,
      ref: 'Account',
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
    ratings: {
      type: Number,
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
