const previewButton = document.querySelector('#view-preview')
const fullpageButton = document.querySelector('#view-fullpage')
const toolLinks = document.querySelectorAll('nav a')

previewButton.setAttribute('checked', '')

if (previewButton.checked === true) {
  for (const toolLink of toolLinks) {
    toolLink.setAttribute('target', 'preview')
  }
}

if (fullpageButton.checked === true) {
  for (const toolLink of toolLinks) {
    toolLink.removeAttribute('target')
  }
}

previewButton.addEventListener('click', () => {
  for (const toolLink of toolLinks) {
    toolLink.setAttribute('target', 'preview')
  }
})

fullpageButton.addEventListener('click', () => {
  for (const toolLink of toolLinks) {
    toolLink.removeAttribute('target')
  }
})
