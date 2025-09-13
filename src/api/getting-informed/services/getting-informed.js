'use strict';

/**
 * getting-informed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::getting-informed.getting-informed');
