module.exports = async (ctx, next) => {
    console.log(strapi.config, Object.keys(strapi.config), Object.keys(strapi))
    // if(!strapi.config.services.number.is_moov("12921892")) {
        return await next()
    // }
    ctx.unauthaured("Bonjour inconnu")
}
