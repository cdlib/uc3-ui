// Home Template //

const { faker } = require('@faker-js/faker')
const heading = faker.lorem.sentence(6).replace('.', '')

module.exports = {
  heading: heading,
  paragraphs: faker.lorem.paragraphs(20, '</p>\n<p>'),
  plain_breadcrumb: {
    breadcrumb: {
      text: [
        'UC3',
        'Page',
        'This Plain Page'
      ]
    }
  }
}
