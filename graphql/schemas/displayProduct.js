export default /* GraphQL */ `
  type DisplayProduct {
    _id: ID!
    shopId: ID!
    image: String!
    description: String!
  }

  input DisplayProductInput {
    shopId: ID!
    image: String!
    description: String!
  }
`;
