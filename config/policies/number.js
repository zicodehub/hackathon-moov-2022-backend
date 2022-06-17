module.exports = {
    is_moov: async (ctx, next) => {
        if(!strapi.config.services.number.is_moov("12921892")) {
            return await next()
        }
        ctx.unauthaured("Bonjour inconnu")
    }
}