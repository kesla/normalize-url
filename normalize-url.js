var urlLib = require('url')

  , handleWww = function (opts, url) {
      if (typeof(opts.www) !== 'boolean')
        return url

      var parsedUrl = urlLib.parse(url)
      if (opts.www === true) {
        if (parsedUrl.host.slice(0, 4) !== 'www.')
          parsedUrl.host = 'www.' + parsedUrl.host
      }

      return urlLib.format(parsedUrl)
    }

  , normalizeUrl = function (opts) {
      opts = opts || {}

      return function (url) {
        if (opts.baseUrl) {
          url = urlLib.resolve(opts.baseUrl, url)
        }

        url = handleWww(opts, url)

        return url

      }
    }

module.exports = normalizeUrl