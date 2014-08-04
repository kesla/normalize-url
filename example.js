var normalizeUrl = require('./normalize-url')({
        // optional base url to resolve relative addresses to
        baseUrl: 'http://www.google.com'
        // www === true      www. on all urls
        // www === false    www. on no urls
        // www === undefined don't touch www. in host
      , www: true
      , trailingSpaces: true
    })

console.log(normalizeUrl('/relative'))
console.log(normalizeUrl('https://google.com/foo/bar'))