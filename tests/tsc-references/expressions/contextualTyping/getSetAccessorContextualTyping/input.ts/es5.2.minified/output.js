function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
var C = function() {
    "use strict";
    var Constructor, protoProps, staticProps;
    function C() {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, C);
    }
    return Constructor = C, protoProps = [
        {
            key: "X",
            get: function() {
                return "string";
            },
            set: function(x) {
            }
        },
        {
            key: "Y",
            get: function() {
                return !0;
            },
            set: function(y) {
            }
        },
        {
            key: "W",
            get: function() {
                return !0;
            },
            set: function(w) {
            }
        },
        {
            key: "Z",
            get: function() {
                return 1;
            },
            set: function(z) {
            }
        }
    ], _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), C;
}();