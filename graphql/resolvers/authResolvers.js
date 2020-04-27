import Account from '../../models/account';

export default {
  signIn: async (email, password) => {
    const user = await Account.findByCredentials(email, password);
    const token = user.generateAuthToken();
    console.log(token);
    return { token };
  },
};
