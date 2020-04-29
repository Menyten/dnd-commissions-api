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
    ratings: [Number]!
    reviews: [Review]
  }

  input CreateShopInput {
    shopkeeper: ID!
    shopTitle: String!
    shopDescription: String!
  }
`;
