'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const PinCheck = core.registerPlugin('PinCheck', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PinCheckWeb()),
});

class PinCheckWeb extends core.WebPlugin {
    async pinCheck() {
        console.log('pin check not working on web');
        return {
            value: 'false'
        };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PinCheckWeb: PinCheckWeb
});

exports.PinCheck = PinCheck;
//# sourceMappingURL=plugin.cjs.js.map
