import Account from '../../models/account';

export default {
  accounts: async () => await Account.find().lean(),
  createAccount: async (args) => {
    const account = new Account({
      ...args.accountInput,
    });
    const result = await account.save().catch((error) => {
      throw new Error(error);
    });

    return result;
  },
};
