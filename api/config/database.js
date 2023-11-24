module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'clothing-store-1'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
