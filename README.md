# cordova-plugin-aztec-qrcode
Generate QRCode using Aztec format


## Install

**Prerequisites**
> The **cordova-plugin-add-swift-support** allow to develop cordova plugin using swift. It provides a way to configure IOS toolchains to support swift 3.0
```
cordova plugin add cordova-plugin-add-swift-support --save
```

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
