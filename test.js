var test = require('tape')

  , normalizeUrl = require('./normalize-url')

test('default does almost nothing', function (t) {
  var norm = normalizeUrl()
  t.equal(norm('/relative'), '/relative')
  t.equal(norm('http://www.google.com'), 'http://www.google.com/')
  t.equal(norm('https://yahoo.com//foo/bar//'), 'https://yahoo.com//foo/bar//')
  t.end()
})

test('www = true', function (t) {
  var norm = normalizeUrl({ www: true })
  t.equal(norm('/relative'), '/relative')
  t.equal(norm('http://www.google.com'), 'http://www.google.com/')
  t.equal(norm('https://yahoo.com/foo/bar'), 'https://www.yahoo.com/foo/bar')
  t.end()
})

test('www = false', function (t) {
  var norm = normalizeUrl({ www: false })
  t.equal(norm('/relative'), '/relative')
  t.equal(norm('http://www.google.com'), 'http://google.com/')
  t.equal(norm('https://yahoo.com/foo/bar'), 'https://yahoo.com/foo/bar')
  t.end()
})
