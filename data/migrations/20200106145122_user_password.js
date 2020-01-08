
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.varchar("Username", 255).notNullable().unique();
      tbl.varchar("Password", 255).notNullable();
      tbl.varchar("FirstName", 255).notNullable();
      tbl.varchar("LastName", 255).notNullable();
      tbl.date("Birthday")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
