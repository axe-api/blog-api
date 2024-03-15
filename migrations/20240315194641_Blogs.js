export const up = function (knex) {
  return knex.schema.createTable("blogs", function (table) {
    table.increments();
    table.integer("owner_id").unsigned().notNullable();
    table.string("title").notNullable();
    table.timestamps();

    table
      .foreign("owner_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("blogs");
};
