// Post Header Component //

const { faker } = require('@faker-js/faker')
const postDateUnformatted = new Date(faker.date.past())
const dateFormat = {year: 'numeric', month: 'long', day: 'numeric'}
const postDate = postDateUnformatted.toLocaleDateString('en-US', dateFormat)

module.exports = {
  heading: faker.commerce.productDescription(),
  name: faker.person.fullName(),
  date: postDate
}
