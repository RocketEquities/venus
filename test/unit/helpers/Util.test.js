require("sails-test-helper");

describe(TEST_NAME, function() {
  before(function() {
    this.Util = sails.helpers.Util;

    //-- save config values
    this.assetsConfig = sails.config.assets;
    sails.config.assets = _.cloneDeep(this.assetsConfig);
  });

  after(function() {
    //-- restore config values
     sails.config.assets = this.assetsConfig;
  });

  describe(".toAssetsUrl", function() {
    it("should return assets url given a path", function() {
      sails.config.assets = { baseUrl: "" };
      expect(this.Util.toAssetsUrl("/images/sample.png")).to.equal("/images/sample.png");

      sails.config.assets = { baseUrl: "http://localhost" };
      expect(this.Util.toAssetsUrl("/images/sample.png")).to.equal("http://localhost/images/sample.png");
    });
  });
});
