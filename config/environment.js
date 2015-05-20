/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mapit',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval'  https://maps.googleapis.com http://130.211.58.230:35729 https://*.googleapis.com https://*.gstatic.com",
    'img-src': "'self' https://*.google.com https://*.googleapis.com https://*.gstatic.com http://placehold.it/20x20/ccc/777",
    'font-src': "'self' https://*.gstatic.com http://netdna.bootstrapcdn.com",
    'style-src': "'self' 'unsafe-inline' https://*.googleapis.com http://netdna.bootstrapcdn.com",
    'connect-src': "'self' ws://130.211.58.230:35729 http://localhost:3000 http://130.211.58.230:3000 http://localhost:3000/api/locations",
    'frame-src': "'self' https://*.googleapis.com https://*.gstatic.com https://*.google.com"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
