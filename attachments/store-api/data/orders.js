const fs = require("node:fs/promises");

const { v4: generateId } = require("uuid");

const { NotFoundError } = require("../util/errors");
const { getCart, cartToDTO } = require("../data/carts");

async function readData() {
  const data = await fs.readFile("db.json", "utf8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile("db.json", JSON.stringify(data));
}

async function getAll() {
  const data = await readData();
  if (!data.orders) {
    throw new NotFoundError("Could not find any orders.");
  }
  return data.orders;
}

async function get(id) {
  const data = await readData();

  if (!data.orders || data.orders.length === 0) {
    throw new NotFoundError("Could not find any orders.");
  }

  const order = data.orders.find((p) => p.id === id);

  if (!order) {
    throw new NotFoundError("Could not find order for id " + id);
  }

  return order;
}

async function add(order) {
  const data = await readData();

  const newOrder = {
    id: generateId(),
    username: order.username,
    customerId: order.customerId,
    firstName: order.firstname,
    lastName: order.lastname,
    phone: order.phone,
    city: order.city,
    address: order.address,
    orderStatus: "Pending",
    orderDate: Date.now(),
    orderItems: [],
  };

  const cart = await getCart(newOrder.customerId);
  const cartDto = await cartToDTO(cart);

  cartDto.cartItems.forEach((item) => {
    newOrder.orderItems.push({
      id: generateId(),
      productId: item.product.productId,
      title: item.product.title,
      price: item.product.price,
      image: item.product.image,
      quantity: item.product.quantity,
    });
  });

  data.orders.unshift({
    ...newOrder,
  });

  // clear cart items
  const index = data.carts.findIndex(
    (p) => p.customerId === newOrder.customerId
  );

  data.carts[index].cartItems = [];

  await writeData(data);
  return newOrder.id;
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
