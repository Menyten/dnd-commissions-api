import Account from '../../models/account';
import Order from '../../models/order';

export default {
  accounts: async () => await Account.find().lean(),
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
    const result = await order.save().catch(error => {
      throw new Error(error);
    });

    return result;
  },
};
