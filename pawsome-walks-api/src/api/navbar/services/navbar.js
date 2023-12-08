"use strict";

/**
 * navbar service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::navbar.navbar", ({ strapi }) => ({
  async findOne(query) {
    const entries = await strapi.db.query("api::navbar.navbar").findOne({
      populate: ["logo.image", "nav_links.*"],
      where: {
        locale: {
          $eq: query.locale,
        },
      },
    });


    return entries;
  },
}));
