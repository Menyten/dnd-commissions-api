import { buildSchema } from 'graphql';
import schemas from './schemas';
import queries from './queries';
import mutations from './mutations';

export default buildSchema(`
${schemas}

type RootQuery {
  ${queries}
}

type RootMutation {
  ${mutations}
}

schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
