export default /* GraphQL */ `
  signIn(email: String!, password: String!): User!
  signOut: String

  createAccount(username: String!, firstname: String!, lastname: String!, email: String!, password: String!, birthdate: String!): String
  createOrder(buyerId: ID!, shopId: ID!, totalPrice: Float!, orderDescription: String!, products: [ID]!): Order!
  
  createShop(shopTitle: String!, shopDescription: String!): Shop!
  updateShop(shopId: String, shopTitle: String, shopDescription: String, shopImage: String): Shop!
  createProduct(shop: ID!, productTitle: String!, productDescription: String!, price: Float!): [Product!]!
`;
