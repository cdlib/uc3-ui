
// Thumbnail Grid Component //

const { faker } = require('@faker-js/faker')
const list = [];

for (let i = 0; i < 6; i++) {
  list.push({
    thumbnail: {
      title: faker.commerce.productDescription(),
      posted: [
        faker.commerce.productName(),
        faker.commerce.productName(),
        faker.commerce.productName()
      ],
      image: faker.image.urlPicsumPhotos({ width: 400, height: 300, grayscale: false, blur: 0 })
    }
  })
}

module.exports = {
  items: list
}
