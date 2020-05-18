import Account from '../../models/account';
import Order from '../../models/order';

export default {
  accounts: async () => await Account.find().lean(),
  signIn: async ({ signInInput: { email, password } }) => {
    const user = await Account.findByCredentials(email, password);
    const token = user.generateAuthToken();
    return { token };
  },
  createAccount: async args => {
    const account = new Account({
      ...args.accountInput,
    });
    const result = await account.save().catch(error => {
      throw new Error(error);
    });

    return result;
  },

  createOrder: async ({ orderInput }, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    if (req.userId !== orderInput.buyerId) throw new Error('Unauthorized');

    const order = new Order(orderInput);
    const saved = await order.save().catch(() => {
      throw new Error('Error creating order');
    });

    return saved;
  },

  fetchOrders: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthorized');
    const orders = await Order.find({ buyerId: req.userId })
      .populate({ path: 'shop' })
      .catch(error => {
        throw new Error(error);
      });

    return orders;
  },
};
