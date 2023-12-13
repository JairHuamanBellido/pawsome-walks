'use strict';

/**
 * real-case service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::real-case.real-case');
