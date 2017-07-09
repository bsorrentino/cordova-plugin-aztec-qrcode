var exec = require('cordova/exec');

module.exports = function(element, message, success, error) {

    var container = document.getElementById(element);

    if( !container ) {
        error( "PKBarcodeFormatAztec :: element " +  element + " not found!");
        return;
    }

    var ios_success = function( result ) {

        var img = document.createElement("img");
        img.style.heigth = "100%";
        img.style.width = "100%";

        container.appendChild( img );

        img.src = "data:image/png;base64," + result;

        success( img );

    }
    exec( ios_success, error, "PKBarcodeFormatAztec", "generateMethod", [message]);


}

//require("cordova/exec/proxy").add("PKBarcodeFormatAztec", module.exports);
