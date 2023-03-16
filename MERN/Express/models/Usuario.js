const faker = require ("faker")

class Usuario {
    constructor() {
    this.fname = faker.name.firstName();
    this.lname = faker.name.lastName();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    this.phone = faker.phone.phoneNumber();
    }}

module.exports = {
    Usuario
}