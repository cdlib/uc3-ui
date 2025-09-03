// ***** Popover Detection ***** //

/*
If the popover property is detected in the browser, remove the no-popover class from the html tag. This will
disable CSS styles using the no-popover class that set alternative UI states if the popover API isn't supported.
*/

if (window.HTMLElement.prototype.hasOwnProperty('popover')) { // eslint-disable-line no-prototype-builtins
  document.querySelector('html').classList.remove('no-popover')
}
