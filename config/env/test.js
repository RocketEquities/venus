/**
 * TEST environment settings
 *
 */

module.exports = {

  //-- environment
  environment: "test",

  //-- host
  host: "localhost",

  //-- log
  log: {
    level: "silent"
  },

  //-- session
  session: {
    adapter: "memory"
  },

  //-- cache
  cache: {
    adapter: "memory"
  },

  //-- connections
  connections: {
    mysql: {
      adapter: "sails-memory",
      host: "localhost",
      user: "venus",
      password: "venus",
      database: "venus",
      timezone: "utc"
    }
  },

  //-- cors
  cors: {
    allRoutes: true,
    origin: "*",
    credentials: true,
    methods: "GET, POST, PUT, DELETE, OPTIONS, HEAD"
  },

  //-- csrf
  csrf: false

};
