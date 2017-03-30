'use strict';

var _index = require('./index');

test('replaces blacklisted words with asterisks', function () {
  return expect((0, _index.sensitiveWords)('The name of the NX will be Nintendo Switch', ['Switch'])).toBe('The name of the NX will be Nintendo ***');
});

test('replaces multiple instances of blacklisted words with asterisks', function () {
  return expect((0, _index.sensitiveWords)('The name of the NX will be Nintendo Switch. This Switch will be awesome', ['Switch'])).toBe('The name of the NX will be Nintendo ***. This *** will be awesome');
});