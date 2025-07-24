// Mark Elements //

const { faker } = require('@faker-js/faker')

module.exports = {
  text: faker.lorem.paragraphs(5, ' <mark>library</mark> ')
}
