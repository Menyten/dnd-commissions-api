import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
    tokens: [String],
  },
  {
    timestamps: true,
  }
);

accountSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const Account = mongoose.model('Account', accountSchema);

export default Account;
