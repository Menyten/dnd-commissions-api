import accountResolvers from './accountResolvers';
import shopResolvers from './shopResolvers';
import productResolvers from './productResolvers';

export default {
  ...accountResolvers,
  ...shopResolvers,
  ...productResolvers,
};
