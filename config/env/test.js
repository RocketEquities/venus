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
