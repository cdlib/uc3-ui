// ***** Anchor Positioning Polyfill ***** //

/*
Required for positioning popover API elements.
See https://github.com/oddbird/css-anchor-positioning
*/

const anchorPositioningPolyfill = async () => {
  const { default: polyfill } = await import('@oddbird/css-anchor-positioning/dist/css-anchor-positioning-fn.js')

  polyfill()
}

if (!('anchorName' in document.documentElement.style)) {
  anchorPositioningPolyfill()
}
