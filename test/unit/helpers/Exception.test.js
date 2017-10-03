require("sails-test-helper");

describe(TEST_NAME, function() {
  before(function() {
    this.Exception = sails.helpers.Exception;
  });

  it("should be an Error instance", function() {
    expect(this.Exception).to.exist;
    expect(new this.Exception()).to.be.an.instanceof(Error);
  });

  describe("Defined errors", function() {
    [
      "UnknownError",
      "SystemError",
      "TimeoutError",
      "ValidationError",

      "BadRequest",
      "Unauthorized",
      "Forbidden",
      "NotFound",
      "ServerError"
    ].forEach(function(e) {
      it(e + " should exist", function() {
        var E = this.Exception[e];
        expect(E).to.exist;
        expect(new E()).to.be.instanceof(E);
        expect(function() { throw new E(); }).to.throw(E);
      });
    });
  });

});
