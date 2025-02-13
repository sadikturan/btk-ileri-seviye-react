import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET() {
  if (!db) {
    db = await open({
      filename: "./blog.db",
      driver: sqlite3.Database,
    });
  }

  const result = await db.all("SELECT * FROM blogs");

  return Response.json(result);
}
