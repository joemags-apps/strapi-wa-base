'use strict';

const { main } = require("../../../../../app");

module.exports = {
  app(ctx) {
    // Quickly return so that it won't retry
    ctx.send(true);
    const { body } = ctx.request;
    main(body);
  },
};
