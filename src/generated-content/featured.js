// Featured Component //

const { faker } = require('@faker-js/faker')

module.exports = {
  heading: 'Introducing our ' + faker.commerce.productName() + ' Project',
  paragraph: faker.commerce.productDescription() + ' that ' + faker.lorem.words(5)
}
