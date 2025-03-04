// Search Result Component //

const { faker } = require('@faker-js/faker')
const fakerDate = faker.date.past()
const postDateUnformatted = new Date(fakerDate)
const dateFormat = {year: 'numeric', month: 'long', day: 'numeric'}
const postDate = postDateUnformatted.toLocaleDateString('en-US', dateFormat)


module.exports = {
  title: faker.commerce.productDescription(),
  description: faker.lorem.sentences({ min: 4, max: 6 }),
  date: postDate,
  datetime: fakerDate
}
