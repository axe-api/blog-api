export const up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments();
    table.integer("blog_id").unsigned().notNullable();
    table.string("title").notNullable();
    table.text("content");
    table.timestamps();

    table
      .foreign("blog_id")
      .references("blogs.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("posts");
};
