export function configuration() {
  return {
    database: {
      uri: process.env.database_uri,
    },
    security: {
      accessToken: {
        secret: process.env.access_token_secret || 'access_token',
        expiresIn: process.env.access_token_expires || 60 * 3600,
      },
      root: {
        password: process.env.root_password || '1234',
      },
    },
  };
}
