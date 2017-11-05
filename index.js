(function(global) {
    // We don't use any es6 features
    function RPlain(props) {
        return props.children;
    }

    (function(RPlain) {
        if (typeof exports === 'object') {
            // CommonJS
            module.exports = RPlain;
        } else if (typeof define === 'function' && define.amd) {
            // AMD
            define(RPlain);
        } else {
            // Global scope
            global.RPlain = RPlain;
        }
    })(RPlain);
})(this);