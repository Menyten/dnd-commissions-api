import accountResolvers from './accountResolvers';
import authResolvers from './authResolvers';
import shopResolvers from './shopResolvers';

export default {
  ...accountResolvers,
  ...authResolvers,
  ...shopResolvers,
};
