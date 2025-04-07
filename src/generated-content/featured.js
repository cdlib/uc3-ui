// Featured Component //

const { faker } = require('@faker-js/faker')

module.exports = {
  image: faker.image.urlPicsumPhotos({ width: 800, height: 400, grayscale: false, blur: 0 }),
  heading: 'Introducing our ' + faker.commerce.productName() + ' Project',
  paragraph: faker.commerce.productDescription() + ' that ' + faker.lorem.words(5)
}
