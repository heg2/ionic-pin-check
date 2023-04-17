import { WebPlugin } from '@capacitor/core';
import type { PinCheckPlugin } from './definitions';
export declare class PinCheckWeb extends WebPlugin implements PinCheckPlugin {
    pinCheck(): Promise<{
        value: string;
    }>;
}
