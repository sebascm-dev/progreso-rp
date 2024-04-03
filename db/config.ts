import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const News = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    date: column.text(),
    text: column.text(),
  },
});

export default defineDb({
  tables: { News },
});
