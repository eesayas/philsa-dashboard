'use strict';

/**
 * highlight-display service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::highlight-display.highlight-display');
