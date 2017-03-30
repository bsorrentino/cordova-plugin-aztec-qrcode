# cordova-plugin-aztec-qrcode
Generate QRCode using Aztec format


## Install for IOS platform

**Prerequisites**
> Since the plugin has been written in swift we need to install also the **cordova-plugin-add-swift-support**. It provides a way to configure IOS toolchains to support swift 3.0
>```
>cordova plugin add cordova-plugin-add-swift-support --save
>```

**Add plugin**
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
