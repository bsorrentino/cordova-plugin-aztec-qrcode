# cordova-plugin-aztec-qrcode

Generate QRCode using Aztec format

## Supported platforms
* **IOS**
> Native implementation using [Core Image Filter `CIAztecCodeGenerator`](https://developer.apple.com/library/content/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CIAztecCodeGenerator))
* **Browser**
> Implementation based on [bwip-js](https://www.npmjs.com/package/bwip-js))


## Add Plugin
```
cordova plugin add https://github.com/bsorrentino/cordova-plugin-aztec-qrcode.git --save
```

## Usage

### Basic implementation

In HTML template create a **div** as **QRCode container**
```html
<div id="qrCode">
  <!-- this will contain the Image -->
</div>

```

In javascript call the provided API gives a reference to container
```javascript

PKBarcodeFormatAztec.generate(
  document.getElementById('qrCode'),
  "message to encode",
  function(e) => {
    console.log( "QRCODE showed on", element);
  },
  function(err) {
    console.log("ERROR ", err);
  });
```

### Ionic implementation

In HTML template create a **div** as **QRCode container**
```html
<div id="qrCode" #qrCode class="code">
  <!-- this will contain the Image -->
</div>

```
In javascript call the provided API gives a reference to container
```javascript
@ViewChild('qrCode') qrCode: ElementRef; //HTMLDivElement;

generate() {

  PKBarcodeFormatAztec.generate(
     this.qrCode.nativeElement,
     "message to encode",
     (element) => {
       //console.log("qrBase64=", e);
       //this.qrImg = "data:image/png;base64," + e;
       console.log( "QRCODE showed on", element);
     },
     (err) => {
       console.log("ERROR ", err);
     });

}
```

### Note for IOS platform

**Dependencies**
> Since the plugin has been written in swift we need to install also the [cordova-plugin-add-swift-support](https://www.npmjs.com/package/cordova-plugin-add-swift-support). It provides a way to configure IOS toolchains to support swift 3.0
