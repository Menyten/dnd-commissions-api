export default `
  createAccount(accountInput: AccountInput): String
  createOrder(orderInput: OrderInput): Order!
  createShop(shopInput: ShopInput): Shop!
  updateShop(shopId: String, shopTitle: String, shopDescription: String, shopImage: String): Shop!
  createDisplayProduct(displayProductInput: DisplayProductInput): [DisplayProduct],
  createProduct(shopId: String, productTitle: String, productDescription: String, price: Float): [Product]!
`;
