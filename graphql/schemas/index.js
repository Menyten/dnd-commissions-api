import accountSchema from './account';
import authSchema from './auth';
import shopSchema from './shop';
import reviewSchema from './review';
import orderSchema from './order';
import exampleProjectSchema from './exampleProject';

export default `
  ${accountSchema}
  ${authSchema}
  ${shopSchema}
  ${reviewSchema}
  ${orderSchema}
  ${exampleProjectSchema}
`;
