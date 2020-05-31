export default `
  accounts: [Account!]
  signIn(signInInput: SignInInput): User!
  fetchShop(shopId: ID): Shop!
  fetchOrders: [Order]
`;
