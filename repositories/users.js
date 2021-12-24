//const knex = require('./knex')
const knexConfig = require('../knexfile')
//const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'production' ])
const knex = require('knex')(knexConfig)

//console.log('nnnn db.sqlite3')
function createUser(user){
    return knex("users").insert(user);
}

function getUsers(){
    return knex("users").select("*");
}

function getUser(user){
    return knex("users").where(user);
}

function createItem(item){
    return knex("items").insert(item);
}

function getItems(){
    return knex("items").select("*");
}

function getItem(item){
    return knex("items").where(item);
}

function updateUser(item,data){
    return knex("users").where(item).update(data);
}

function updateItem(item,data){
    return knex("items").where(item).update(data);
}

function deleteUser(item){
    return knex("users").where(item).del();
}

function deleteItem(item){
    return knex("items").where(item).del();
}

function createTicket(item){
    return knex("tickets").insert(item);
}

function getTickets(){
    return knex("tickets").select("*");
}

function getTicket(item){
    return knex("tickets").where(item);
}

function updateTicket(item,data){
    return knex("tickets").where(item).update(data);
}

function getPaginated(current_page){
    var pagination = {};
    var per_page = 20;
    var page = current_page || 1;
    if (page < 1) page = 1;
    var offset = (page - 1) * per_page;
    return Promise.all([
        knex("tickets").count('* as count').first(),
        knex("tickets").select("*").offset(offset).limit(per_page)
    ]).then(([total, rows]) => {
        var count = total.count;
        var rows = rows;
        pagination.total = count;
        pagination.per_page = per_page;
        pagination.offset = offset;
        pagination.to = offset + rows.length;
        pagination.last_page = Math.ceil(count / per_page);
        pagination.current_page = page;
        pagination.from = offset;
        pagination.data = rows;
        //console.log(offset,page,pagination,per_page,total,rows)
        return pagination
    }).catch(err=>console.log(err));
    
}


module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem,
    updateTicket,
    getTicket,
    getTickets,
    createTicket,
    getPaginated
}
