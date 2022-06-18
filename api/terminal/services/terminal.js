'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    broadcast_client: async () => {
        console.log("Socket.io broadcast_client")
    },
    broadcast_agent: async () => {
        console.log("Socket.io broadcast_agent")
    },
    send_to: async (id) => {
        console.log("Socket.io broadcast_client")
    },
};
