// Home Template //

const { faker } = require('@faker-js/faker')

module.exports = {
  parallax_image1: faker.image.urlPicsumPhotos({ width: 800, height: 400, grayscale: false, blur: 0 }),
  parallax_image2: faker.image.urlPicsumPhotos({ width: 800, height: 400, grayscale: false, blur: 0 })
}
