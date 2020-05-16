export default `
  type Order {

    buyerId: ID!
    shop: Shop!
    price: Float!
    orderDescription: String!
    status: String!
  }

  input OrderInput {
    buyerId: ID!
    shopId: ID!
    price: Float!
    orderDescription: String!
  }
`;
