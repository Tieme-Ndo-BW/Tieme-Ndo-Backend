const db = require("../data/dbConfig");

const add = user => {
    return db("users").insert(user);
};

function findBy(filter) {
    return db("users").where(filter);
}

function find() {
    return db("users").select("id", "Username");
}

function findAllStaff() {
    return db("users");
}

function findByStaffId(id) {
    return db("users")
    .where({ id })
    .first();
}

function removeStaff(id) {
    return db("users")
    .where('id', id)
    .del();
}

function updateStaff(id, changes) {
    return db("users")
    .where({ id })
    .update(changes);
}
module.exports = {
    add,
    find,
    findBy,
    findAllStaff,
    findByStaffId,
    removeStaff,
    updateStaff,
};