export const up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("email").notNullable().unique().index();
    table.string("password").notNullable();
    table.timestamps();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("users");
};
