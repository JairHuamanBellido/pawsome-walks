"use strict";

/**
 * navbar controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::navbar.navbar", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.service("api::navbar.navbar").findOne(query);

    return entity;
  },
}));
