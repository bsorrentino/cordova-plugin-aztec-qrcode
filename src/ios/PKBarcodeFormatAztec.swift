/**

PKBarcodeFormatAztec.swift

Cordova Plugin Implementation
*/

@objc(PKBarcodeFormatAztec) class PKBarcodeFormatAztec : CDVPlugin {


    func convert(cmage:CIImage) -> UIImage?
    {
        let context:CIContext = CIContext.init(options: nil)
        guard let cgImage:CGImage = context.createCGImage(cmage, from: cmage.extent) else {
            return nil
        }

        let image:UIImage = UIImage.init(cgImage: cgImage)

        return image
    }

    func generateQRCode( inputMessage:String ) -> UIImage? {
        let data = inputMessage.data(using: .utf8)!


        guard let aztec = CIFilter(name: "CIAztecCodeGenerator",
                    withInputParameters: [ "inputMessage" : data ]) else {
                        return nil
        }

        guard let outputImage = aztec.outputImage else {
            return nil
        }

        let transform = CGAffineTransform(scaleX: 10, y: 10)

        return convert( cmage: outputImage.applying( transform) )

    }

    func generateMethod(_ command: CDVInvokedUrlCommand) {

        guard let inputMessage = command.arguments[0] as? String else {

            let pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs:"missing input")

            self.commandDelegate?.send(pluginResult, callbackId: command.callbackId )

            return
        }

        /* SIZE MANAGEMENT

        //print( "\(typ)" ) ; let typ = type( of: command.arguments[1] )

        var size = CGSize(width:200,height:200)

        if  let arg = command.arguments[1] as? NSNumber {

            print( "\(CGFloat(arg.floatValue))")


            size = CGSize(width:CGFloat(arg.floatValue),height:CGFloat(arg.floatValue))
        }

        */

        guard let image = generateQRCode( inputMessage:inputMessage ) else {

            let pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR,
                                            messageAs:"error generating image")

            self.commandDelegate?.send(pluginResult, callbackId: command.callbackId )

            return

        }

        guard let imageData = UIImagePNGRepresentation(image) else {

            let pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR,
                                            messageAs:"error get PNG representation")

            self.commandDelegate!.send(pluginResult, callbackId: command.callbackId )

            return
        }

        let strBase64 = imageData.base64EncodedData(options: .lineLength64Characters)

        guard let datastring = String(data: strBase64, encoding: String.Encoding.utf8) else {

            let pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR,
                                               messageAs:"error converting to string")

            self.commandDelegate?.send(pluginResult, callbackId: command.callbackId )

            return
        }

        // print( "\(datastring)" )

        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs:datastring)

        self.commandDelegate?.send(pluginResult, callbackId: command.callbackId )

    }

}
