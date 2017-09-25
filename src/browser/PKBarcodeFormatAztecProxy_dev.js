var browser = require('cordova/platform');

var script = document.createElement('script');
script.src = "js/freetype.js";
script.onload = function () {
    console.log( "Module 'freetype.js' Loaded!" );
};
document.head.appendChild(script);

module.exports = function(container, message, success, error)  {

    /*
    var container = element instanceof window.HTMLElement
					? element : document.getElementById(element);

    if( !container ) {
        error( "PKBarcodeFormatAztec :: element " +  element + " not found!");
        return;
    }

    // Remove childrens
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    */

    var __symbology = container.getAttribute("symbology");

    var showQRCode =  function() {

        var bw = new BWIPJS(Module, false /*use anti-aliased fonts*/);

        // Add a bitmap instance
        bw.bitmap(new Bitmap());

        // Set the x,y scaling factors
        bw.scale(10, 10);

        // Create an options object.  See the bwipjs and BWIPP documentation
        // for possible values.
        // You can use any plain JavaScript values.  Numbers, bools and strings.
        var opts = {
            parsefnc:true,
            //alttext:<alternative text>,
            //width: <with in inch>,
            //height: <height in inch>,
            includetext:false
        };

        // Call into the BWIPP cross-compiled code.   BWIPP() is a factory
        // method that returns a function object.  You can call the
        // function object multiple times (and reuse the BWIPJS object as
        // well), but you will likely need to create a new Bitmap object
        // prior to each call.
        try {
            BWIPP()(bw, __symbology || 'azteccode', message, opts);
        } catch (e) {
            // handle error
            error( "PKBarcodeFormatAztec :: error " + e );
            return;
        }


        var canvas = document.createElement("canvas");
        canvas.style.visibility = "hidden";
        canvas.style.heigth = "100%";
        canvas.style.width = "100%";

        container.appendChild( canvas );

        // Render the barcode.  This is your function so change as necessary.
        // bw.bitmap() returns the Bitmap instance created above.
        //bw.bitmap().render();
        var rot = "N";
        bw.bitmap().pad( 1, 1 );
        bw.bitmap().show( canvas, rot );

        success( canvas );

    };

    setTimeout( showQRCode, 0 );


}

//require("cordova/exec/proxy").add("PKBarcodeFormatAztec", module.exports);
