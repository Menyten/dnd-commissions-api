export default `
  type ExampleProject {
    _id: ID!
    shopId: ID!
    image: String!
    description: String!
  }

  input ExampleProjectInput {
    shopId: ID!
    image: String!
    description: String!
  }
`;
