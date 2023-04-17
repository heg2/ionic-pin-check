import { WebPlugin } from '@capacitor/core';
export class PinCheckWeb extends WebPlugin {
    async pinCheck() {
        console.log('pin check not working on web');
        return {
            value: 'false'
        };
    }
}
//# sourceMappingURL=web.js.map