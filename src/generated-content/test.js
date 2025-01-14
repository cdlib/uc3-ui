const { faker } = require('@faker-js/faker')

module.exports = {
  title: 'This Heading Generated from Custom Data',
  desc: 'This paragraph below is generated by the Faker library:',
  text: faker.lorem.paragraph(),
  fruit: [
    'Apples',
    'Oranges',
    'Pears'
  ]
}
