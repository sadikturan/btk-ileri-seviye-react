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

async function getAll() {
  const data = await readData();
  if (!data.products) {
    throw new NotFoundError("Could not find any products.");
  }
  return data.products;
}

async function get(id) {
  const data = await readData();
  if (!data.products || data.products.length === 0) {
    throw new NotFoundError("Could not find any products.");
  }

  const product = data.products.find((p) => p.id === id);

  if (!product) {
    throw new NotFoundError("Could not find product for id " + id);
  }

  return product;
}

async function add(product) {
  const data = await readData();
  data.products.unshift({
    ...product,
    id: generateId(),
  });
  await writeData(data);
}

async function replace(id, product) {
  const data = await readData();

  if (!data.products || data.products.length === 0) {
    throw new NotFoundError("Could not find any products.");
  }

  const index = data.products.findIndex((p) => p.id === id);

  if (index < 0) {
    throw new NotFoundError("Could not find product for id " + id);
  }

  data.products[index] = { ...product, id };

  await writeData(data);
}

async function remove(id) {
  const data = await readData();
  const updatedData = data.products.filter((p) => p.id !== id);
  await writeData({ products: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
