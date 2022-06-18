const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

   createMany: async (ctx) => {
    let entity;
    console.log("C'est moi")
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.identification.create(data, { files });
    } else {
      entity = await strapi.services.identification.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.identification, client: 1 });
  },
};

 

 