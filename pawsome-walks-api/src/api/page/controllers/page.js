"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.service("api::page.page").find(query);

    return entity;
  },
}));
