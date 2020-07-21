export default /* GraphQL */ `
  type Order {
    _id: ID!
    buyerId: ID!
    shopId: ID!
    products: [Product]!
    totalPrice: Float!
    orderDescription: String!
    status: String!
  }
`;
