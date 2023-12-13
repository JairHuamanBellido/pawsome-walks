'use strict';

/**
 * real-case router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::real-case.real-case');
