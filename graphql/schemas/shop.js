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
    displayProducts: [DisplayProduct]
    ratings: Int!
    reviews: [Review]
    createdAt: String!
    updatedAt: String!
  }

  input ShopInput {
    shopTitle: String!
    shopDescription: String!
  }
`;
