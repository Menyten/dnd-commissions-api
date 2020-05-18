import accountSchema from './account';
import authSchema from './auth';
import shopSchema from './shop';
import reviewSchema from './review';
import orderSchema from './order';
import productSchema from './product';
import displayProductSchema from './displayProduct';

export default `
  ${accountSchema}
  ${authSchema}
  ${shopSchema}
  ${reviewSchema}
  ${orderSchema}
  ${productSchema}
  ${displayProductSchema}
`;
