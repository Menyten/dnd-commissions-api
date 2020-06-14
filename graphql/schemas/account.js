export default /* GraphQL */ `
  type Account {
    _id: ID!
    username: String!
    firstname: String!
    lastname: String!
    email: String!
    age: String!
    role: String!
    createdAt: String!
    shopId: ID
  }

  type PublicAccount {
    _id: ID!
    username: String!
    firstname: String!
    lastname: String!
    email: String!
  }

  input AccountInput {
    username: String!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    age: String!
  }
`;
