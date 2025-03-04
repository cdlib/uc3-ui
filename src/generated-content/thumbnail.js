// Thumbnail Component //

const { faker } = require('@faker-js/faker')

module.exports = {
  title: faker.commerce.productDescription(),
  posted: [
    faker.commerce.productName(),
    faker.commerce.productName(),
    faker.commerce.productName()
  ],
  image: faker.image.urlPicsumPhotos({ width: 400, height: 300, grayscale: false, blur: 0 })
}
