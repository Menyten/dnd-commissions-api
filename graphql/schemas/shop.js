export default /* GraphQL */ `
  type Shop {
    _id: ID!
    owner: PublicAccount!
    shopTitle: String!
    shopDescription: String!
    shopImage: String
    products: [Product]
    finishedOrders: [Order]
    currentOrders: [Order]
    createdAt: String!
    updatedAt: String!
  }
`;
