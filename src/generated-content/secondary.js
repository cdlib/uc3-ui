// Home Template //

const { faker } = require('@faker-js/faker')
const heading = faker.lorem.sentence(6).replace('.', '')

module.exports = {
  parallax_image: faker.image.urlPicsumPhotos({ width: 800, height: 400, grayscale: false, blur: 0 }),
  heading: heading,
  paragraphs: faker.lorem.paragraphs(20, '</p>\n<p>')
}
