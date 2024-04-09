import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const News = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    date: column.text(),
    text: column.text(),
  },
});

const Admins = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
    job: column.text(),
    urlimage: column.text(),
    urlsocial: column.text()
  },
});

export default defineDb({
  tables: { News, Admins },
});
