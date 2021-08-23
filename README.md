# bigsur-modal
Big Sur Modal is a lightweight (2.1KB minified) library that you can use to make modals in the style of MacOS Big sur. 

# Installation
The code for Big Sur Modal is hosted here.

You can put the JS and CSS files in your project like this:

`<link rel="stylesheet" src="https://pineapplerind.ga/libraries/bigsur-modal/src/style.css">`
`<script src="https://pineapplerind.ga/libraries/bigsur-modal/src/index.min.js"></script>`

# Usage
To use Big Sur Modal, declare a variable containing the BigSurModal object:

```javascript
var modal = new BigSurModal({
    //arguments here, more info in customization section
})
```

Then initialize it with the .show() function:

`modal.show()`

Similarly, you can remove any open modal with the .close() function:

`modal.close()`

# Customization
Pass an object into the BigSurModal function with title, description, and buttons.


## Arguments
title
- The modal title. String.

description: 
- The modal description. String.


appIcon: 
- The application icon to show. Can be URL OR path. String. Optional.


buttons: 
- Array of objects. Object arguments are below. Optional.

## Button Arguments
Name: 
- Button name. String.

Default: 
- If true: makes the button blue; can get clicked by pressing Enter key; and is the "default" button. Boolean. Optional.

Function: 
- If included, specifies the function to call when the button is pressed ALONG WITH CLOSING THE MODAL. If not included, the button on click just closes the modal. String. Optional.

Example
```javascript
var modal = new BigSurModal({
    title: 'Modal Title!', 
    description: 'Modal description!',
    theme: 'dark',  
    appIcon: 'https://data.tooliphone.net/iskin/themes/14241/15260/preview-256.png',
      
    buttons: [
        {name: 'Cancel', function: 'alert("Are you sure?")'}, 
        {name: 'OK', default: true}
    ],
})
```

## Changelog
**Wed, Aug 18** Initial commit. Version 1.0.0.
**Wed, Aug 22** Added dark mode. Version 1.1.0.

## About
Written by PineappleRind

Current Version: 1.1.0 Public Beta
