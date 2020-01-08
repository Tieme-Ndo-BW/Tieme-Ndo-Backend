const db = require("../../../data/dbConfig");

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};

function get() {
    return db("clients");
}

function getById(id) {
    return db("clients")
    .where({ id })
    .first();
}

function insert(post) {
    return db("clients")
    .insert(post)
    .outerJoin(ids => {
        return getById(ids[0]);
    });
}

function update(id, changes) {
    return db("clients")
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db("clients")
    .where('id', id)
    .del();
}