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
      const { client, prenom, lieu_naissance, civilite, adresse, profession, date_naissance, nationalite } = data
      client = await strapi.services.client.create({
        client, prenom, lieu_naissance, civilite, adresse, profession, date_naissance, nationalite, 
      }) 
      
      entity = await strapi.services.identification.create(data, { files });
    } else {
        const { client, prenom, lieu_naissance, civilite, adresse, profession, date_naissance, nationalite } = ctx.request.body
        client = await strapi.services.client.create({
          client, prenom, lieu_naissance, civilite, adresse, profession, date_naissance, nationalite, 
        }) 
      entity = await strapi.services.identification.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.identification, client: 1 });
  },
};

 

 