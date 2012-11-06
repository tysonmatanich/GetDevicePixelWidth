/*! GetDevicePixelWidth | Includes: GetDevicePixelRatio | Author: Tyson Matanich, 2012 | License: MIT */

(function(n){n.getDevicePixelWidth=function(t){t=t||!1;var i=t==!1||n.screen.width>n.screen.height?n.screen.width:n.screen.height,r=t==!1||n.innerWidth>n.innerHeight?n.innerWidth:n.innerHeight;return r>i&&(i=r),i*n.getDevicePixelRatio()}})(this);


/*! GetDevicePixelRatio | Author: Tyson Matanich, 2012 | License: MIT */

(function(n){n.getDevicePixelRatio=function(){var t=1;return n.screen.systemXDPI!==undefined&&n.screen.logicalXDPI!==undefined&&n.screen.systemXDPI>n.screen.logicalXDPI?t=n.screen.systemXDPI/n.screen.logicalXDPI:n.devicePixelRatio!==undefined&&(t=n.devicePixelRatio),t}})(this);