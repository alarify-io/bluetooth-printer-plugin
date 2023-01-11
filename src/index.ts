import { registerPlugin } from '@capacitor/core';

import type { HcBluetoothPrinterPlugin } from './definitions';

const HcBluetoothPrinter = registerPlugin<HcBluetoothPrinterPlugin>('HcBluetoothPrinter', {
  web: () => import('./web').then(m => new m.HcBluetoothPrinterWeb()),
});

export * from './definitions';
export { HcBluetoothPrinter };
