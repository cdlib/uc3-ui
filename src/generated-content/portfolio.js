// Portfolio Component //

const { faker } = require('@faker-js/faker')
const list = [];

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

for (let i = 0; i < 5; i++) {
  list.push({
    item: {
      name: toTitleCase(faker.lorem.words({ min: 1, max: 3 }))
    }
  })
}

module.exports = {
  heading: faker.lorem.sentence(10),
  listitems: list
}
