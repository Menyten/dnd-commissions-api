import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const PORT = process.env.PORT || 3000;

const schema = buildSchema(`
  type Query {
    hello: String!
  }
`);

const root = {
  hello: () => 'Hello World',
};

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

// Test route to make sure the server is up
app.get('/', (req, res) => {
  res.send('ok');
});

const startServer = () =>
  app.listen(PORT, () =>
    console.log(
      `Listening on port ${PORT} GraphiQL http://localhost:${PORT}/graphql`
    )
  );

module.exports = startServer;
