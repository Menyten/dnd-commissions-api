const auth = `
  type Token {
     token: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`;

export default auth;
