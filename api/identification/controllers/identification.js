const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const client = require('../../client/services/client');

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
      const { nom, prenom, lieu_naissance, civilite, adresse, profession, date_naissance, nationalite } = data
      let created_client = await strapi.services.client.create({
          client, prenom, lieu_naissance, civilite, adresse, profession, date_naissance, nationalite, 
        }) 
        
        entity = await strapi.services.identification.create(data, { files });
    } else {
        const { numero, msisdn } = ctx.request.body
        const { type_piece, numero_piece, lieu_delivrance, date_emission, date_expiration } = ctx.request.body
        const { nom, prenom, lieu_naissance, civilite, adresse, profession, date_naissance, nationalite } = ctx.request.body
        
        console.log("La carte sim ", Object.keys(strapi.services))
        let created_piece = await  strapi.services.client.create({ 
            type_piece, numero_piece, lieu_delivrance, date_emission, date_expiration 
        })
        
        
        console.log("Le client ", nom, prenom, lieu_naissance, date_naissance, civilite, adresse, profession, nationalite)
        let created_client = await strapi.services.client.create({
            nom, prenom, lieu_naissance, civilite, adresse, profession, nationalite, 
            piece_identite: created_piece.id
        }) 
        
        console.log("La sSIM")
        let created_sim = await strapi.services['carte-sim'].create({
            numero, msisdn, client: created_client.id
        })
       
      entity = await strapi.services.identification.create(ctx.request.body);
    }

    strapi.services.terminal.broadcast_agent()
    return sanitizeEntity(entity, { model: strapi.models.identification, client: client });
  },
};

 

 