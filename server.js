import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';
import rootValue from './graphql/resolvers';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
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

export default startServer;