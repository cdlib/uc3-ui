// Blog Post Template //

const { faker } = require('@faker-js/faker')

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

module.exports = {
  heading: toTitleCase(faker.lorem.words(8)),
  image: faker.image.urlPicsumPhotos({ width: 800, height: 400, grayscale: false}),
  paragraphs1: faker.lorem.paragraphs(5, '</p>\n<p>'),
  paragraphs2: faker.lorem.paragraphs(5, '</p>\n<p>')
}
