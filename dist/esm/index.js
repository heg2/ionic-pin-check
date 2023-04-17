import { registerPlugin } from '@capacitor/core';
const PinCheck = registerPlugin('PinCheck', {
    web: () => import('./web').then(m => new m.PinCheckWeb()),
});
export * from './definitions';
export { PinCheck };
//# sourceMappingURL=index.js.map