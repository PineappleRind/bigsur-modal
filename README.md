# Big Sur Modal Docs
Big Sur Modal is a lightweight **(2.1KB minified)** library that you can use to make modals in the style of MacOS Big sur.

## Installation
The code for Big Sur Modal is hosted [here.](https://pineapplerind.ga/libraries/bigsur-modal)
You can put the JS and CSS files in your project like this:

```html
<link rel="stylesheet" src="https://pineapplerind.ga/libraries/bigsur-modal/src/style.css">
<script src="https://pineapplerind.ga/libraries/bigsur-modal/src/index.min.js"></script>
```
## Usage
To use Big Sur Modal, declare a variable containing the BigSurModal object:</p>
```javascript
var modal = new BigSurModal({
    //arguments here, more info in customization section
})
```
## Then initialize it with the .show() function:</p>
                <code>
                    <pre>
<span class="js-var">modal</span>.<span class="js-func">show</span>()</pre></code>
                <p>
                    Similarly, you can remove any open modal with the .close() function:
                </p>
                <code>
                    <pre>
<span class="js-var">modal</span>.<span class="js-func">close</span>()</pre></code>
                    </pre>
                </code>
        </div>
        <hr>
        <div id="customization">
            <h2 class="text-gray-100 font-extralight text-3xl">Customization</h2>
            <p>Pass an object into the BigSurModal function with title, description, and buttons.</p>
            <br>
            <h3 class="text-gray-100 font-extralight text-2xl">Arguments</h3>
            <b>title: </b> The modal title. String.<br>
            <b>description: </b> The modal description. String.<br>
            <b>appIcon: </b> The application icon to show. Can be URL OR path. String. Optional.<br>
            <b>theme: </b> The modal theme. Defaults are <inlinecode>light</inlinecode> and <inlinecode>dark</inlinecode>. More info in the <a href="#">Theming</a> section. String. Optional.<br>
            <b>buttons: Array of objects. Object arguments are below. Optional.</b>
            <br><br>
            <h3 class="text-gray-100 font-extralight text-2xl">Button Arguments</h3>
            <b>Name: </b> Button name. String.<br>
            <b>Default: </b> If true: makes the button blue; can get clicked by pressing Enter key; and is the "default" button. Boolean. Optional.<br>
            <b>Function: </b> If included, specifies the function to call when the button is pressed ALONG WITH CLOSING THE MODAL. If not included, the button on click just closes the modal. String. Optional.<br>
    <code class="code">
        <pre>
<span class="js-key">var </span><span class="js-var">modal </span>= <span class="js-key">new </span><span class="js-func">BigSurModal</span>({
    <span>title: </span><span class="js-str">'Modal Title!'</span>, 
    <span>description: </span><span class="js-str">'Modal description!'</span>,
    <span>theme: </span><span class="js-str">'dark'</span>,  
    <span>appIcon: </span><span class="js-str">'https://data.tooliphone.net/iskin/themes/14241/15260/preview-256.png'</span>,
      
    buttons: [
        {name: <span class="js-str">'Cancel'</span>, function: <span class="js-str">'alert("Are you sure?")'</span>}, 
        {name: <span class="js-str">'OK'</span>, default: <span class="js-bool">true</span>}
    ],
})</pre></code>
        </div>
        <hr>
        <div id="changelog">
            <h2 class="text-gray-100 font-extralight text-3xl">Changelog</h2>
            <ul>
                <li><b>Wed, Aug 18</b> Initial commit. Version 1.0.0.</li>
                <li><b>Wed, Aug 22</b>Added dark mode. Version 1.1.0.</li>
            </ul>
        </div>
        <hr>
        <h3 class="text-gray-100 font-extralight text-2xl">About</h3>
        <p>Written by <a href="https://pineapplerind.ga">PineappleRind</a></p>
        <p>Current Version: 1.1.0 Public Beta</p>
    </div>
