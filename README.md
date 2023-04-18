# pin-check
This is a fork of @creativeCookie/pin-check, just for setting the peerDependency for capacitor to "latest", allowing the plugin to work with capacitor 4.

On iOS Simulator, `pincheck()` always returns true, even no pin code is set. On iOS devices, it works reliably tough. (And on Android devices and simulator).

A capicator plugin to check on iOS / Android devices if the password pin is enabled or not on the mobile device.

## Install

```bash
npm install @creativecookie/pin-check
npx cap sync
```

## USAGE IN IONIC 5/6
1. After installing include in the module page that you want to use with the import below
2. import { PinCheck } from '@heg2/pin-check';
3. in your function, (await PinCheck.pinCheck()).value will return either true or false

## API

<docgen-index>

* [`pinCheck()`](#pincheck)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### pinCheck()

```typescript
pinCheck() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
