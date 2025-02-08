const fs = require("node:fs/promises");
var Iyzipay = require("iyzipay");

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

async function getAll(username) {
  const data = await readData();

  const orders = data.orders.filter((p) => p.username === username);

  if (!orders) {
    throw new NotFoundError("Could not find any orders");
  }

  return orders;
}

async function get(id, username) {
  const data = await readData();

  const order = data.orders.find((p) => p.id === id && p.username === username);

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

  // calculate Total
  const total = cart?.cartItems.reduce(
    (toplam, item) => toplam + item.product.price * item.product.quantity,
    0
  );

  data.orders.unshift({
    ...newOrder,
    total,
  });

  // clear cart items
  const index = data.carts.findIndex(
    (p) => p.customerId === newOrder.customerId
  );

  data.carts[index].cartItems = [];

  await writeData(data);
  return newOrder.id;
}

async function payment(order) {
  // const cart = await getCart(order.customerId);
  var iyzipay = new Iyzipay({
    apiKey: "api_key",
    secretKey: "secret_key",
    uri: "https://sandbox-api.iyzipay.com",
  });

  var request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: "123456789",
    price: "1",
    paidPrice: "1.2",
    currency: Iyzipay.CURRENCY.TRY,
    installment: "1",
    basketId: "B67832",
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardHolderName: "John Doe",
      cardNumber: "5528790000000008",
      expireMonth: "12",
      expireYear: "2030",
      cvc: "123",
      registerCard: "0",
    },
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      gsmNumber: "+905350000000",
      email: "email@email.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    billingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Binocular",
        category1: "Collectibles",
        category2: "Accessories",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: "0.3",
      },
      {
        id: "BI102",
        name: "Game code",
        category1: "Game",
        category2: "Online Game Items",
        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
        price: "0.5",
      },
      {
        id: "BI103",
        name: "Usb",
        category1: "Electronics",
        category2: "Usb / Cable",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: "0.2",
      },
    ],
  };

  iyzipay.payment.create(request, function (err, result) {
    if (result.status === "success") {
      console.log("success");
      return true;
    }
    return false;
  });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.payment = payment;
