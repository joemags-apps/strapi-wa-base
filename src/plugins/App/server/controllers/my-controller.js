'use strict';

module.exports = {
  index(ctx) {
    console.log('Running...');
    ctx.body = strapi
      .plugin('app')
      .service('myService')
      .getWelcomeMessage();
  },
};
