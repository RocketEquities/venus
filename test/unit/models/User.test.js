require("sails-test-helper");

describe(TEST_NAME, function() {

  describe("validations", function() {
    beforeEach(function() {
      this.user = factory.build("user1");
    });

    describe("#email", function() {
      it("is required", function (done) {
        delete this.user.email;
        User.create(this.user, function (err, user) {
          expect(err).to.exist;
          expect(err).to.validate("email", "required");
          done();
        })
      });

      it("should be a valid email", function (done) {
        this.user.email = "blahblah";
        User.create(this.user, function (err, user) {
          expect(err).to.exist;
          expect(err).to.validate("email", "email");
          done();
        })
      });
    });

    describe("#password", function() {
      it("should be >= 8 characters", function (done) {
        this.user.password = "pass";
        User.create(this.user, function (err, user) {
          expect(err).to.exist;
          expect(err).to.validate("password", "minLength");
          done();
        })
      });

      it("should be < 32 characters", function (done) {
        this.user.password = Math.random().toString(33);
        User.create(this.user, function (err, user) {
          expect(err).to.exist;
          expect(err).to.validate("password", "maxLength");
          done();
        })
      });
    });

    describe("#firstName", function() {
      it("is required", function (done) {
        delete this.user.firstName;
        User.create(this.user, function (err, user) {
          expect(err).to.exist;
          expect(err).to.validate("firstName", "required");
          done();
        })
      });
    });

    describe("#lastName", function() {
      it("is required", function (done) {
        delete this.user.lastName;
        User.create(this.user, function (err, user) {
          expect(err).to.exist;
          expect(err).to.validate("lastName", "required");
          done();
        })
      });
    });
  });

});
