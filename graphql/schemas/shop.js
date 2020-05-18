export default `
type Shop {
    _id: ID!
    shopkeeperId: ID!
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
    shopkeeperId: ID!
    shopTitle: String!
    shopDescription: String!
  }
`;
