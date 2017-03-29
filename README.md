# cordova-plugin-aztec-qrcode
Generate QRCode using Aztec format


## Install

```
cordova plugin add https://github.com/bsorrentino/cordova-plugin-aztec-qrcode.git --save
```

## Usage

```javascript

PKBarcodeFormatAztec.generate(
  "message to encode",
  function(e) {

    var img = document.getElementById("aztec");

    img.src = "data:image/png;base64," + e;
},
function(err) {
  console.log( "ERROR ", err);
});

```
