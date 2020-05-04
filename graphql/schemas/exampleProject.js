export default `
  type ExampleProject {
    _id: ID!
    image: String!
    description: String!
  }

  input ExampleProjectInput {
    image: String!
    description: String!
  }
`;
