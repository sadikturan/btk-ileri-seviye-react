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
  if (!data.courses) {
    throw new NotFoundError("Could not find any courses.");
  }
  return data.courses;
}

async function get(id) {
  const data = await readData();
  if (!data.courses || data.courses.length === 0) {
    throw new NotFoundError("Could not find any courses.");
  }

  const course = data.courses.find((course) => course.id === id);
  if (!course) {
    throw new NotFoundError("Could not find course for id " + id);
  }

  return course;
}

async function add(course) {
  const data = await readData();
  data.courses.unshift({
    ...course,
    id: generateId(),
    users: 0,
    comments: 0,
    likes: 0,
  });
  await writeData(data);
}

async function replace(id, course) {
  const data = await readData();
  if (!data.courses || data.courses.length === 0) {
    throw new NotFoundError("Could not find any courses.");
  }

  const index = data.courses.findIndex((course) => course.id === id);
  if (index < 0) {
    throw new NotFoundError("Could not find course for id " + id);
  }

  data.courses[index] = { ...course, id };

  await writeData(data);
}

async function remove(id) {
  const data = await readData();
  const updatedData = data.courses.filter((course) => course.id !== id);
  await writeData({ courses: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
