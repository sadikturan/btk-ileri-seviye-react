const fs = require("node:fs/promises");

const { v4: generateId } = require("uuid");

const { NotFoundError } = require("../util/errors");

async function readData() {
  const data = await fs.readFile("db.json", "utf8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile("db.json", JSON.stringify(data));
}

async function getCart(id) {
  const data = await readData();

  let cart = data.carts.find((p) => p.customerId === id);

  if (!cart) {
    cart = await createCart();
  }

  return cart;
}

async function createCart() {
  const data = await readData();
  const cart = {
    id: generateId(),
    customerId: generateId(),
    cartItems: [],
  };
  data.carts.push(cart);
  await writeData(data);
  return cart;
}

async function addItemToCart(productId, quantity, customerId) {
  const cart = await getCart(customerId);
  const item = cart.cartItems.find((item) => item.productId == productId);

  if (item) {
    item.quantity += quantity;
  } else {
    cart.cartItems.push({
      id: generateId(),
      productId: productId,
      quantity: quantity,
    });
  }

  await replace(cart.id, cart);
  return cart;
}

async function removeItem(productId, quantity, customerId) {
  const cart = await getCart(customerId);

  const itemIndex = cart.cartItems.findIndex((p) => p.productId == productId);
  if (itemIndex == -1) {
    throw new NotFoundError("Could not find the cart item");
  }
  const finalQuantity = (cart.cartItems[itemIndex].quantity -= quantity);

  if (finalQuantity <= 0) {
    cart.cartItems.splice(itemIndex, 1);
  }

  await replace(cart.id, cart);
  return cart;
}

async function replace(id, cart) {
  const data = await readData();

  const index = data.carts.findIndex((p) => p.id === id);

  if (index < 0) {
    throw new NotFoundError("Could not find cart for id " + id);
  }

  data.carts[index] = { ...cart, id };

  await writeData(data);
}

async function cartToDTO(cart) {
  const data = await readData();

  let items = cart.cartItems.map((item) => ({
    id: item.id,
    product: {
      productId: item.productId,
      quantity: item.quantity,
      title: data.products.find((p) => p.id === item.productId).title,
      price: data.products.find((p) => p.id === item.productId).price,
      image: data.products.find((p) => p.id === item.productId).image,
    },
  }));

  cart.cartItems = items;
  return cart;
}

exports.getCart = getCart;
exports.addItemToCart = addItemToCart;
exports.removeItem = removeItem;
exports.cartToDTO = cartToDTO;
