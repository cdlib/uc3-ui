// Bio Component //

const { faker } = require('@faker-js/faker')
const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const name = firstName + ' ' + lastName
const email = firstName + '.' + lastName + '@ucop.edu'

module.exports = {
  name: name,
  email: email,
  image: faker.image.urlPicsumPhotos({ width: 600, height: 400, grayscale: false, blur: 0 }),
  paragraphs: faker.person.jobTitle() + ', ' + faker.person.bio() + '. ' + faker.lorem.sentences()
}
