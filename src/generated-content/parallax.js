// Parallax Component //

const { faker } = require('@faker-js/faker')

module.exports = {
  image1: faker.image.urlPicsumPhotos({ width: 800, height: 400, grayscale: false}),
  image2: faker.image.urlPicsumPhotos({ width: 800, height: 400, grayscale: false }),
  paragraphs1: faker.lorem.paragraphs(20, '</p>\n<p>'),
  paragraphs2: faker.lorem.paragraphs(30, '</p>\n<p>')
}
