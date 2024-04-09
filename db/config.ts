import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const News = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    date: column.text(),
    text: column.text(),
  },
});

const UserTeam = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    username: column.text(),
    userjob: column.text(),
    userimage: column.text(),
    usersocial: column.text(),
  },
});

export default defineDb({
  tables: { News, UserTeam },
});
