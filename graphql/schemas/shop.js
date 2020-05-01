export default `
type Shop {
    _id: ID!
    shopkeeperId: ID!
    shopTitle: String!
    shopDescription: String!
    shopImage: String
    finishedOrders: [Order]
    currentOrders: [Order]
    examplesToDisplay: [ExampleProject]
    ratings: [Int]!
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
