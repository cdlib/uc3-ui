// Metadata Component //

const { faker } = require('@faker-js/faker')

module.exports = {
  data: [
    faker.commerce.productName(),
    faker.commerce.productName(),
    faker.commerce.productName()
  ]
}
