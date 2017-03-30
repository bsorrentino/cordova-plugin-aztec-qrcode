var browser = require('cordova/platform');


module.exports = {
    generate: function (success, error) {
        setTimeout(function () {
            var strBase64 =
            "iVBORw0KGgoAAAANSUhEUgAAAL4AAAC+CAIAAAAEFiLKAAAAAXNSR0IArs4c6QAA"+
            "ABxpRE9UAAAAAgAAAAAAAABfAAAAKAAAAF8AAABfAAAFNYv0npIAAAUBSURBVHgB"+
            "7JJBktwwDAP3/59OKoccZGWbodqylQz2suWBAJIAvn7kLw4sOfC1xAopDvxIdVKC"+
            "RQdSnUXjQkt10oFFB1KdReNCS3XSgUUHUp1F40JLddKBRQdSnUXjQkt10oFFB1Kd"+
            "ReNCS3XSgUUHUp1F40JLddKBRQdSnUXjQkt10oFFB1KdReNCS3XSgUUHUp1F40L7"+
            "J6vzte3v/ysEW2XuTXUGb42VZ3KH86YPs3OqM9hprDyTO5w3fZidU53BTmPlmdzh"+
            "vOnD7JzqDHYaK8/kDudNH2bnVGew01h5Jnc4b/owO6c6g53GyjO5w3nTh9k51Rns"+
            "NFaeyR3Omz7MzqnOYKex8kzucN70YXZOdQY7jZVncofzpg+zs6rOtMltP6iTcAuj"+
            "zFwceyjIFzGa6rA/DfTQduBajfOmp6nOZMnqD5jRoeDqrb94qY5xb+Ae2g5cazig"+
            "+ZHqNA37/jlmdCj4/TU1kurUHv3li0PbgWv95Wl/fJbq/NGWlR8xo0PBlTt/c1Kd"+
            "307o/4e2A9cyR6c6xr2BixkdCg4HND9SnaZh3z8/tB241vfX1MjG6vBwvKgAWXkf"+
            "WqyFsNkKhQvQzGVuqsP+DGiREsKDUPMDhQuwOarxPNXpmFXERHBjzPSUdCtsErvt"+
            "h1SnYWUVE+GNMdNT0q2wSey2H1KdhpVVTIQ3xkxPSbfCJrHbfkh1GlZWMRHeGDM9"+
            "Jd0Km8Ru+yHVaVhZxUR4Y8z0lHQrbBK77YdUp2FlFRPhjTHTU9KtsEnsth9SnYaV"+
            "VUyEN8ZMT0m3wiax235IdRpWVjER3hgzPSXdCpvEbvtBVYe3qI4K/oQDnJFBU50n"+
            "8ntxhikHc1OdF2N9YjTHb9BU54n8XpxhysHcVOfFWJ8YzfEbNNV5Ir8XZ5hyMDfV"+
            "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"+
            "AAAAAElFTkSuQmCC";

            success(strBase64);
            
        }, 0);
    }
};

require("cordova/exec/proxy").add("PKBarcodeFormatAztec", module.exports);
