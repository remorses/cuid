var pad = require('./pad.js');

var env = typeof window === 'object' ? window : globalThis;
var globalCount = Object.keys(env).length;

let nav = typeof navigator === 'object' ? navigator : {userAgent: 'edge'};

var mimeTypesLength = nav.mimeTypes ? nav.mimeTypes.length : 0;
var clientId = pad((mimeTypesLength +
  nav.userAgent.length).toString(36) +
  globalCount.toString(36), 4);

module.exports = function fingerprint () {
  return clientId;
};
