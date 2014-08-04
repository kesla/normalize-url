# normalize-url

normalize an url

[![NPM](https://nodei.co/npm/normalize-url.png?downloads&stars)](https://nodei.co/npm/normalize-url/)

[![NPM](https://nodei.co/npm-dl/normalize-url.png)](https://nodei.co/npm/normalize-url/)

## Installation

```
npm install normalize-url
```

## Example

### Input

```javascript
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
```

### Output

```
http://www.google.com/relative
https://www.google.com/foo/bar
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
