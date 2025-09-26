// Bio Grid Component //

const { faker } = require('@faker-js/faker')
const list = [];

for (let i = 0; i < 6; i++) {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const name = firstName + ' ' + lastName
  const email = firstName + '.' + lastName + '@ucop.edu'
  const numberGroup1 = faker.number.int({ min: 1000, max: 9000 })
  const numberGroup2 = faker.number.int({ min: 1000, max: 9000 })

  list.push({
    bio: {
      name: name,
      email: email,
      image: faker.image.urlPicsumPhotos({ width: 600, height: 400, grayscale: false, blur: 0 }),
      paragraphs: faker.person.jobTitle() + ', ' + faker.person.bio() + '. ' + faker.lorem.sentences(2)
    },
    profile_link: {
      orcid: 'http://orcid.org/0000-0002' + '-' + numberGroup1 + '-' + numberGroup2,
      linkedin: faker.internet.url(),
      github: faker.internet.url(),
      other: faker.internet.url()
    }
  })
}

module.exports = {
  items: list
}
