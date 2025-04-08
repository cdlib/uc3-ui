// Page Intro Component //

const { faker } = require('@faker-js/faker')
const text = faker.lorem.sentence(5).replace('.', '')

module.exports = {
  text: text,
}
