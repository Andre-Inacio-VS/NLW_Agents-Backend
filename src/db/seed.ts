import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { schema } from "./schema/index.ts";

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
        createdAt: f.date({
          minDate: new Date("2025-01-01"),
          maxDate: new Date(),
        }),
      },
      with: {
        questions: 5,
      },
    },
  };
});

await sql.end();

// biome-ignore lint: only used in dev
console.log("Database reset and seeded successfully.");
