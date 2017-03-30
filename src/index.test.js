import {sensitiveWords} from "./index"

test('replaces blacklisted words with asterisks', () => (
  expect(sensitiveWords('The name of the NX will be Nintendo Switch', ['Switch']))
  .toBe('The name of the NX will be Nintendo *****')
))


test('replaces multiple instances of blacklisted words with asterisks', () => (
  expect(sensitiveWords('The name of the NX will be Nintendo Switch. This Switch will be awesome', ['Switch']))
  .toBe('The name of the NX will be Nintendo *****. This ***** will be awesome')
))
