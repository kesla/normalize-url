var urlLib = require('url')

  , normalizeUrl = function (opts) {
      opts = opts || {}

      var baseUrl = opts.baseUrl ? urlLib.parse(opts.baseUrl) : null

      return function (url) {
        var parsedUrl = urlLib.parse(url)

        if (baseUrl) {
          parsedUrl = baseUrl.resolveObject(parsedUrl)
        }

        if (typeof(opts.www) === 'boolean' && parsedUrl.host) {
          if (opts.www && parsedUrl.host.slice(0, 4) !== 'www.')
            parsedUrl.host = 'www.' + parsedUrl.host

          if (!opts.www && parsedUrl.host.slice(0, 4) === 'www.')
            parsedUrl.host = parsedUrl.host.slice(4)
        }

        return urlLib.format(parsedUrl)

      }
    }

module.exports = normalizeUrl