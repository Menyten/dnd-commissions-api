export default `
  createAccount(accountInput: AccountInput): Account
  createShop(shopInput: ShopInput): Shop
  updateShop(shopId: String, shopTitle: String, shopDescription: String, shopImage: String): Shop
  addExampleProject(image: String, description: String): Shop
`;
