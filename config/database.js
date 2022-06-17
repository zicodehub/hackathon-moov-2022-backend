module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'db'),
        port: env.int('DATABASE_PORT', ),
        database: env('DATABASE_NAME', 'strapidb'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'postgres'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
