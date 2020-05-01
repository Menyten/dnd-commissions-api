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
    finishedOrders: {
      type: [ObjectID],
      ref: 'Order',
    },
    currentOrders: {
      type: [ObjectID],
      ref: 'Order',
    },
    examplesToDisplay: {
      type: [ObjectID],
      ref: 'ExampleProject',
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

// accountSchema.methods.generateAuthToken = function () {
//   const { _id, username, role } = this;
//   const token = jwt.sign(
//     { _id: _id.toString(), username, role },
//     process.env.JWT_SECRET,
//     { expiresIn: '1d' }
//   );
//   return token;
// };

// accountSchema.statics.findByCredentials = async (email, password) => {
//   const user = await Account.findOne({ email });
//   if (!user) {
//     throw new Error('Unable to login');
//   }
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     throw new Error('Unable to login');
//   }
//   return user;
// };

// accountSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 8);
//   }
//   next();
// });

const Shop = mongoose.model('Shop', shopSchema);

export default Shop;
