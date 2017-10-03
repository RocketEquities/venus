require("sails-test-helper");

var Memori = require("memori");

describe(TEST_NAME, function() {
  before(function() {
    this.Cache = sails.helpers.Cache;

    //-- save config values
    this.cacheConfig = sails.config.cache;

    sails.config.cache = _.merge({}, this.cacheConfig, {
      prefix: "cache:",
      ttl: 600,
      adapter: "redis",
      host: "localhost",
      port: 6379,
      db: 1
    });
  });

  after(function() {
    //-- restore config values
     sails.config.cache = this.cacheConfig;
  });

  it("should return a Memori instance", function() {
    var cache = this.Cache();
    expect(cache).to.be.an.instanceof(Memori);
  });

  it("should load default config settings from sails.config.cache", function() {
    var cache = this.Cache();
    expect(cache.options).to.eql(sails.config.cache);
  });

  describe("Instance", function() {
    it("should be a Memori instance", function() {
      var cache = new this.Cache();
      expect(cache).to.be.an.instanceof(Memori);
    });

    it("should load default config settings from sails.config.cache", function() {
      var cache = new this.Cache();
      expect(cache.options).to.eql(sails.config.cache);
    });

    it("should merge options with default config settings", function() {
      var options = { identity: "foo" };
      var config = _.merge({}, sails.config.cache, options);
      var cache = new this.Cache(options);
      expect(cache.options).to.eql(config);
    });
  });
});
