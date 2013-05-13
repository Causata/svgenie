# svgenie

> A cheeky script to let you save D3 graphs, and other SVG documents as a PNG without needing a server component

This adds a convenience wrapper to [gabelerner's canvg](https://code.google.com/p/canvg/ "canvg") to make it really easy to save SVG documents as images.

To get started, you'll need to include `rgbcolor.js`, `canvg.js` and `svgenie.js`, in that order. 
Then make a call like the one below somewhere in your app:

```js
svgenie.save( "theIdOfMySvgElement", {
    name : "them-chickens-jackin-my-style.png"
})
```

...and you're done.


