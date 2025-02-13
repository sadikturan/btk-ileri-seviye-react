import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(request, { params }) {
  const { id } = params;

  if (!db) {
    db = await open({
      filename: "./blog.db",
      driver: sqlite3.Database,
    });
  }

  const result = await db.get("SELECT * FROM blogs WHERE id=?", id);

  return Response.json(result);
}
