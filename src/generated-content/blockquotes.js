// Blockquote Elements //

const { faker } = require('@faker-js/faker')

module.exports = {
  text_inside: faker.lorem.paragraphs(5, '</p>\n<p>'),
  text_outside: faker.lorem.paragraphs(3, '</p>\n<p>')
}
