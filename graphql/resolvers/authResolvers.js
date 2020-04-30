import Account from '../../models/account';

export default {
  signIn: async ({ signInInput: { email, password } }) => {
    const user = await Account.findByCredentials(email, password);
    const token = user.generateAuthToken();
    return { token };
  },
};
