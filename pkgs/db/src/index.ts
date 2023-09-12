import { DB } from "kysely-codegen";
import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import "dotenv/config";

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      max: 10,
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});
