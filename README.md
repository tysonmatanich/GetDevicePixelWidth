# GetDevicePixelWidth

Allows you to get the physical pixel width of a device using JavaScript.

* Author: Tyson Matanich
* License: MIT

**Note:** GetDevicePixelWidth includes [GetDevicePixelRatio]:(http://github.com/tysonmatanich/GetDevicePixelRatio)

## Size and delivery

Currently, `getDevicePixelWidth.js` compresses to around 450 bytes (~0.4 KB), after minify and gzip. To minify, you might try these online tools: [Microsoft Ajax Minifier]:(http://ajaxmin.codeplex.com/), [Uglify]:(http://marijnhaverbeke.nl/uglifyjs), [Yahoo Compressor]:(http://refresh-sf.com/yui/), or [Closure Compiler](http://closure-compiler.appspot.com/home). Serve with gzip compression.

## Sample


```html
<script type="text/javascript">
	var devicePixelWidth = window.getDevicePixelWidth();
</script>
```

If you want to assume that the user is in landscape mode use the following:

```html
<script type="text/javascript">
	var devicePixelWidth = window.getDevicePixelWidth(true);
</script>
```

## Support

GetDevicePixelWidth supports a broad range of browsers and devices (there are currently no known unsupported browsers).