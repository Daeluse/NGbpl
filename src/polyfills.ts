import 'core-js/client/shim';
import 'reflect-metadata';
require('zone.js/dist/zone');

import 'ts-helpers';

let isProd = process.env.ENV === 'build';
let isElectron = process.env.ENV === 'electron' || process.env.ENV === 'watch:electron';

if (isProd || isElectron) {
  // Production

} else {
  // Development

  Error['stackTraceLimit'] = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}
