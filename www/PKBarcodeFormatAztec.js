var exec = require('cordova/exec');

/**
* generate Aztec QRCode Format
*
* @message string
*/

var proxy = require("PKBarcodeFormatAztec.PKBarcodeFormatAztecProxy");

exports.generate = function(element, message, success, error)  {

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

    proxy( container, message, success, error );
}

