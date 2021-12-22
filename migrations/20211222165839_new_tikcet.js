const { v4: uuidv4 } = require('uuid');
exports.up = function(knex) {
    return knex.schema
    .createTable('tickets', function (table) {
      table.uuid('id').unique().primary().defaultTo(uuidv4());
      table.string('type', 255);
      table.string('ticket_owner', 255);
      table.string('address', 255);
      table.boolean('scaned_status', 255).notNullable().defaultTo(false);
      table.string('price', 255).notNullable().defaultTo("200");
      //table.timestamps('created_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('tickets');
};