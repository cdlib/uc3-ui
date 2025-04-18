// Lead Component //

const { faker } = require('@faker-js/faker')
const heading = faker.lorem.sentence(6).replace('.', '')

module.exports = {
  heading: heading,
  text: faker.lorem.paragraph(3)
}
