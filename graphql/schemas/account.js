const account = `
  type Account {
    _id: ID
    username: String!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    age: String!
    role: String!
    createdAt: String!
  }
`;

const accountInput = `
  input AccountInput {
    username: String!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    age: String!
  }
`;

export default `
  ${account}
  ${accountInput}
`;
