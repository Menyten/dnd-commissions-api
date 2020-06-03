export default `
  accounts: [Account!]
  signIn(signInInput: SignInInput): User!
  checkSignedIn: User
  fetchShop(shopId: ID): Shop!
  fetchOrders: [Order]
`;
