const faker = require("faker");

class Empresa {
    constructor() {
    this.name = faker.company.companyName();
    this.suffix = faker.company.companySuffix();
    this.address = {
        street : faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country()
    };
    }}

module.exports = {
    Empresa
}