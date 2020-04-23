import { buildSchema } from 'graphql';
import schemas from './schemas';
import mutations from './mutations';

export default buildSchema(`
  ${schemas}

  type RootQuery {
    accounts: [Account!]
  }

  type RootMutation {
    ${mutations}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
