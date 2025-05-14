// Search Results Template //

const { faker } = require('@faker-js/faker')
const list = []

for (let i = 0; i < 10; i++) {
  const fakerDate = faker.date.past()
  const postDateUnformatted = new Date(fakerDate)
  const dateFormat = {year: 'numeric', month: 'long', day: 'numeric'}
  const postDate = postDateUnformatted.toLocaleDateString('en-US', dateFormat)

  list.push({
    search_result: {
      title: faker.commerce.productDescription(),
      description: faker.lorem.sentences({ min: 4, max: 6 }),
      date: postDate,
      datetime: fakerDate
    }
  })
}

module.exports = {
  items: list,
  search_results_breadcrumb: {
    breadcrumb: {
      text: [
        'University of California Curation Center (UC3)',
        'Search Results for \"uc3\"'
      ]
    }
  }
}
