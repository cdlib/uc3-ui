const { faker } = require('@faker-js/faker')

module.exports = {
  title: 'This is the title',
  desc: 'This is a faker paragraph below:',
  text: faker.lorem.paragraph(),
  names: [
    'Bill',
    'Floyd',
    'Wally'
  ]
}
