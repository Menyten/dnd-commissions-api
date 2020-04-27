export default `
  type Account {
    _id: ID
    username: String!
    firstname: String!
    lastname: String!
    email: String!
    age: String!
    role: String!
    createdAt: String!
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
