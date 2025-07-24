// Orcid ID Component //

const { faker } = require('@faker-js/faker')
const numberGroup1 = faker.number.int({ min: 1000, max: 9000 })
const numberGroup2 = faker.number.int({ min: 1000, max: 9000 })

module.exports = {
  record: 'http://orcid.org/0000-0002' + '-' + numberGroup1 + '-' + numberGroup2
}
