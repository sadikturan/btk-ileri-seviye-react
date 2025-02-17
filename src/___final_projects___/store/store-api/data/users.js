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

async function get(username) {
  const data = await readData();

  const user = data.users.find((p) => p.username === username);

  return user;
}

async function add(user) {
  const data = await readData();
  data.users.unshift({
    id: generateId(),
    ...user,
  });
  await writeData(data);
}

exports.get = get;
exports.add = add;
