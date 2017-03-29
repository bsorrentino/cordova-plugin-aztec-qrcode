var exec = require('cordova/exec');
/**
* generate Aztec QRCode Format
*
* @message string
*/
exports.generate = function(message, success, error) {
    exec(success, error, "PKBarcodeFormatAztec", "generateMethod", [message]);
};
