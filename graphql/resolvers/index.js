import accountResolvers from './accountResolvers';
import authResolvers from './authResolvers';

export default {
  ...accountResolvers,
  ...authResolvers,
};
