module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'https://icon-library-shinko.s3.eu-north-1.amazonaws.com',
          ],
          'default-src': ["'self'", 'data:', 'blob:'],
          'script-src': ["'self'", "'unsafe-inline'", 'data:'],
          'object-src': ["'self'", 'data:'],
          'style-src': ["'self'", "'unsafe-inline'", 'https:'],
        },
      },
    },
  },
  {
    name: 'strapi::parser',
    config: {
      enabled: true,
      options: {
        allowedTags: ['svg', 'path'],
        allowedAttributes: {
          svg: ['xmlns', 'viewBox', 'width', 'height', 'fill'],
          path: ['d', 'stroke', 'stroke-width', 'stroke-linecap'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
