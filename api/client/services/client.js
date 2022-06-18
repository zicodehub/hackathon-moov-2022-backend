'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */
imp
module.exports = {
    is_ten_digits: (num) => num.length == 10,

    is_moov: (num) => {
        return num.startsWith("01")
    }

};
