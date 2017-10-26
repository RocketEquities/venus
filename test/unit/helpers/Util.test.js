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

  describe(".toAssetsUrl()", function() {
    it("should return assets url given a path", function() {
      sails.config.assets = { baseUrl: "" };
      expect(this.Util.toAssetsUrl("/images/sample.png")).to.equal("/images/sample.png");

      sails.config.assets = { baseUrl: "http://localhost" };
      expect(this.Util.toAssetsUrl("/images/sample.png")).to.equal("http://localhost/images/sample.png");
    });
  });

  describe(".toHash()", function() {
    it("should return hashed value of the given argument", function() {
      const data = "some value";
      const hash = this.Util.toHash(data);
      expect(hash).to.not.equal(data);
      expect(hash).to.match(/[:xdigit:]/);
    });
  });

  describe(".toInstanceKey()", function() {
    it("returns string equivalent of non plain object parameter", function() {
      expect(this.Util.toInstanceKey(new Object())).to.equal("");
      expect(this.Util.toInstanceKey(undefined)).to.equal("");
      expect(this.Util.toInstanceKey(null)).to.equal("");
      expect(this.Util.toInstanceKey(1)).to.equal("1");
      expect(this.Util.toInstanceKey("2")).to.equal("2");
    });

    it("returns formatted string equivalent of object parameter", function() {
      expect(this.Util.toInstanceKey({ k1: "v1" })).to.equal("k1:v1");
      expect(this.Util.toInstanceKey({ k1: "v1", k2: { k3: "v3" } })).to.equal("k1:v1,k2:k3:v3");
    });
  });
});
