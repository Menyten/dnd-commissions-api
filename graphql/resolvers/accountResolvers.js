import Account from '../../models/account';
import Order from '../../models/order';

export default {
  accounts: async () => await Account.find().lean(),
  login: async ({ email, password }, context) => {
    const user = await Account.findByCredentials(email, password);
    const token = user.generateAuthToken();
    context.res.setHeader('Set-Cookie', `dnd_commissions=${token}; HttpOnly`);
    return { token, user };
  },
  signOut: async (args, context) => {
    context.res.clearCookie('dnd_commissions');
    return;
  },
  me: (args, req) => {
    if (!req.isAuth) return;
    const user = Account.findById(req.userId).lean();
    const token = req.token;
    return { user, token };
  },
  createAccount: async args => {
    const account = new Account({
      ...args,
    });
    await account.save().catch(() => {
      throw new Error('Error creating account');
    });

    return 'Account created';
  },

  createOrder: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    if (req.userId !== args.buyerId) throw new Error('Unauthorized');

    const order = new Order(args);
    const saved = await order.save().catch(() => {
      throw new Error('Error creating order');
    });

    return saved;
  },

  orders: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const orders = await Order.find({ buyerId: req.userId })
      .populate({ path: 'shop' })
      .catch(error => {
        throw new Error(error);
      });

    return orders;
  },
};
