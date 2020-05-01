export default `
  accounts: [Account!]
  signIn(signInInput: SignInInput): Token!
  fetchShop(shopId: ID): Shop!
`;
