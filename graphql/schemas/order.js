export default `
  type Order {
    _id: ID!
    buyerId: ID!
    shopId: ID!
    products: [Product]!
    totalPrice: Float!
    orderDescription: String!
    status: String!
  }

  input OrderInput {
    buyerId: ID!
    shopId: ID!
    totalPrice: Float!
    orderDescription: String!
  }
`;
