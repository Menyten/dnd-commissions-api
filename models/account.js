import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const ObjectID = mongoose.Schema.Types.ObjectId;

const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
    shopId: {
      type: ObjectID,
    },
  },
  {
    timestamps: true,
  }
);

accountSchema.methods.generateAuthToken = function () {
  const { _id } = this;
  const token = jwt.sign({ _id: _id.toString() }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return token;
};

accountSchema.statics.findByCredentials = async (email, password) => {
  const user = await Account.findOne({ email });
  if (!user) {
    throw new Error('Unable to login');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Unable to login');
  }
  return user;
};

accountSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const Account = mongoose.model('Account', accountSchema);

export default Account;
