export default /* GraphQL */ `
  me: User
  orders: [Order]
  shop(id: ID): Shop!
  accounts: [Account!]
  product(id: ID): Product
  products(query: String): [Product]
`;
