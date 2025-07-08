import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const rooms = pgTable(
  'rooms', // Nome da tabela
  {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    description: text().notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp(),
    deletedAt: timestamp(),
  }
);
