import { db } from "@dialecta/db";

(async () => {
  await db.transaction().execute(async (db) => {
    db.insertInto("Document").values({ contents: "" });
  });
  db.destroy();
})();
