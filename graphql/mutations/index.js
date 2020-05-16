export default `
  createAccount(accountInput: AccountInput): Account!
  createOrder(orderInput: OrderInput): Order!
  createShop(shopInput: ShopInput): Shop!
  updateShop(shopId: String, shopTitle: String, shopDescription: String, shopImage: String): Shop!
  createDisplayProduct(displayProductInput: DisplayProductInput): Shop!
`;
