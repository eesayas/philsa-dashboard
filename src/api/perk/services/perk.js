'use strict';

/**
 * perk service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::perk.perk');
