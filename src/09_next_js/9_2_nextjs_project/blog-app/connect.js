const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./blog.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY,
        name TEXT,
        description TEXT,
        img TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created blogs table.");

      db.run(`DELETE FROM blogs`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from blogs");

        const row1 = [
          "Blog Title 1",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam minima tempora ullam molestias sunt tenetur voluptates laborum ad laboriosam. Consequatur impedit quo nesciunt voluptates similique ad eligendi dolor a consequuntur!",
          "1.jpg",
        ];
        const row2 = [
          "Blog Title 2",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam minima tempora ullam molestias sunt tenetur voluptates laborum ad laboriosam. Consequatur impedit quo nesciunt voluptates similique ad eligendi dolor a consequuntur!",
          "2.jpg",
        ];

        const row3 = [
          "Blog Title 3",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam minima tempora ullam molestias sunt tenetur voluptates laborum ad laboriosam. Consequatur impedit quo nesciunt voluptates similique ad eligendi dolor a consequuntur!",
          "3.jpg",
        ];

        const row4 = [
          "Blog Title 4",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam minima tempora ullam molestias sunt tenetur voluptates laborum ad laboriosam. Consequatur impedit quo nesciunt voluptates similique ad eligendi dolor a consequuntur!",
          "4.jpg",
        ];

        const sql = `INSERT INTO blogs(name, description, img) VALUES(?, ?, ?)`;

        db.run(sql, row1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(sql, row2, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(sql, row3, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(sql, row4, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Rows inserted, ID ${id}`);
        });

        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});
