
exports.up = function(knex) {
  return knex.schema.createTable('clients', tbl => {
      tbl.increments();
      tbl.varchar("FirstName", 255).notNullable();
      tbl.varchar("LastName", 255).notNullable();
      tbl.varchar("VillageName", 255).notNullable();
      tbl.integer("LoanAmount").notNullable();
      tbl.integer("CurrentAmount").notNullable();
      tbl.date("LoanInitiation").notNullable();
      tbl.date("DueDate").notNullable();
      tbl.integer("BagsOfMaize");
      tbl.integer("Goal");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("clients");
};
