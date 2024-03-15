export const up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.increments();
    table.integer("post_id").unsigned().notNullable();
    table.integer("author_id").unsigned().notNullable();
    table.text("content");
    table.timestamps();

    table
      .foreign("post_id")
      .references("posts.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .foreign("author_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("comments");
};
