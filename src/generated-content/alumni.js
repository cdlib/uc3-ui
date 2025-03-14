// Alumni Component //

const { faker } = require('@faker-js/faker')
const list = [];

for (let i = 0; i < 4; i++) {
  list.push({
    person: {
      name: faker.person.fullName(),
      position: faker.person.jobTitle()
    }
  })
}

module.exports = {
  alumni: list
}
