/*! GetDevicePixelWidth | Includes: GetDevicePixelRatio | Author: Tyson Matanich, 2012 | License: MIT */
(function (window) {
	window.getDevicePixelWidth = function (assumeLandscape) {
		// Don't assume reorientation to landscape by default
		assumeLandscape = assumeLandscape || false;

		// Get the screen dimension
		var screenWidth = (assumeLandscape == false || window.screen.width > window.screen.height) ? window.screen.width : window.screen.height;

		// Increase size if window inner size is larger (Fix for multi display setups, especially IE)
		var windowWidth = (assumeLandscape == false || window.innerWidth > window.innerHeight) ? window.innerWidth : window.innerHeight;
		if (windowWidth > screenWidth) {
			screenWidth = windowWidth;
		}

		// Multiply screen resolution by the device pixel ratio to get the actual physical pixel dimension
		return screenWidth * window.getDevicePixelRatio();
	};
})(this);

/*! GetDevicePixelRatio | Author: Tyson Matanich, 2012 | License: MIT */
(function (window) {
	window.getDevicePixelRatio = function () {
		var ratio = 1;
		// To account for zoom, change to use deviceXDPI instead of systemXDPI
		if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
			// Only allow for values > 1
			ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
		}
		else if (window.devicePixelRatio !== undefined) {
			ratio = window.devicePixelRatio;
		}
		return ratio;
	};
})(this);