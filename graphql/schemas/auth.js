export default `
  type User {
     token: String!
     user: Account!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`;
