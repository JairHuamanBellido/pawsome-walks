"use strict";

/**
 * page service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::page.page", ({ strapi }) => ({
  async find(query) {
    const entries = await strapi.db.query("api::page.page").findMany({
      populate: [
        "sections.hero_banner.image.image",
        "sections.hero_banner.button.button.nav_link",
        "seo",
      ],
      where: {
        locale: {
          $eq: query.locale,
        },
        slug: {
          $eq: query.filters.slug["$eq"],
        },
      },
    });

    return entries[0];
  },
}));
