export default `
type Shop {
    _id: ID!
    shopkeeper: ID!
    shopTitle: String!
    shopDescription: String!
    shopImage: String
    finishedOrders: [Order]
    currentOrders: [Order]
    examplesToDisplay: [ExampleProject]
    ratings: [Int]!
    reviews: [Review]
  }

  input ShopInput {
    shopkeeper: ID!
    shopTitle: String!
    shopDescription: String!
  }
`;
