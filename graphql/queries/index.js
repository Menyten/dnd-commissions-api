export default `
  accounts: [Account!]
  signIn(signInInput: SignInInput): User!
  signOut: String
  checkSignedIn: User
  fetchShop(shopId: ID): Shop!
  fetchOrders: [Order]
  fetchProducts(query: String): [Product]
  fetchProduct(productId: ID): Product
`;
