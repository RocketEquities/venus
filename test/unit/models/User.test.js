require("sails-test-helper");

describe(TEST_NAME, function() {

  describe("validations", function() {
    beforeEach(function() {
      this.user = factory.build("user1");
    });

    describe("#email", function() {
      it("is required", function(done) {
        delete this.user.email;
        User.create(this.user, function(err, user) {
          expect(err).to.exist;
          expect(err).to.validate("email", "required");
          done();
        })
      });

      it("should be a valid email", function(done) {
        this.user.email = "blahblah";
        User.create(this.user, function(err, user) {
          expect(err).to.exist;
          expect(err).to.validate("email", "email");
          done();
        })
      });
    });

    describe("#password", function() {
      it("should be >= 8 characters", function(done) {
        this.user.password = "pass";
        User.create(this.user, function(err, user) {
          expect(err).to.exist;
          expect(err).to.validate("password", "minLength");
          done();
        })
      });

      it("should be < 32 characters", function(done) {
        this.user.password = Math.random().toString(33);
        User.create(this.user, function(err, user) {
          expect(err).to.exist;
          expect(err).to.validate("password", "maxLength");
          done();
        })
      });

      it("should be hashed", function(done) {
        const self = this;
        User.create(self.user, function(err, user) {
          expect(err).to.not.exist;
          expect(user).to.be.an.object;
          expect(user.password).to.not.be.empty;
          expect(user.password).to.match(/[:xdigit]/);
          expect(user.password).to.not.equal(self.user.password);
          done();
        })
      });
    });

    describe("#firstName", function() {
      it("is required", function(done) {
        delete this.user.firstName;
        User.create(this.user, function(err, user) {
          expect(err).to.exist;
          expect(err).to.validate("firstName", "required");
          done();
        })
      });
    });

    describe("#lastName", function() {
      it("is required", function(done) {
        delete this.user.lastName;
        User.create(this.user, function(err, user) {
          expect(err).to.exist;
          expect(err).to.validate("lastName", "required");
          done();
        })
      });
    });
  });

  describe("#toJSON()", function() {
    it("should return record without password attribute", function() {
      this.user = factory.build("user1");
      User.findOneByEmail(this.user.email, function(err, user) {
        expect(err).to.not.exist;
        expect(user).to.be.an.object.with.property("password").that.is.not.empty;
        expect(user).to.respondTo("toJSON");

        let _user = user.toJSON();
        expect(_user).to.not.respondTo("toJSON");
        expect(_user).to.be.an.object.without.property("password");
        done();
      })
    });
  });

  describe(".authenticate()", function() {
    it("should exist", function() {
      expect(User).to.respondTo("authenticate");
    });

    context("email is empty", function() {
      it("should return 'Unauthorized' error", function(done) {
        let credentials = {};
        User.authenticate(credentials, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.be.an.instanceof(Exception.Unauthorized);
          done();
        })
      });
    });

    context("invalid email", function() {
      it("should return 'Unauthorized' error", function(done) {
        let credentials = {email: "1234"};
        User.authenticate(credentials, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.be.an.instanceof(Exception.Unauthorized);
          done();
        })
      });
    });

    context("password is empty", function() {
      it("should return 'Unauthorized' error", function(done) {
        let credentials = {email: "user1@abc.com"};
        User.authenticate(credentials, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.be.an.instanceof(Exception.Unauthorized);
          done();
        })
      });
    });

    context("invalid password", function() {
      it("should return 'Unauthorized' error", function(done) {
        let credentials = {email: "user1@abc.com", password: "1234"};
        User.authenticate(credentials, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.be.an.instanceof(Exception.Unauthorized);
          done();
        })
      });
    });

    context("user does not exist", function() {
      it("should return 'Unauthorized' error", function(done) {
        let credentials = {email: "nouser@abc.com", password: "pass1234"};
        User.authenticate(credentials, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.be.an.instanceof(Exception.Unauthorized);
          done();
        })
      });
    });

    context("valid email and password", function() {
      it("should return user record without password attribute", function(done) {
        let credentials = {email: "user1@abc.com", password: "pass1234"};
        User.authenticate(credentials, function(err, user) {
          expect(err).to.not.exist;
          expect(user).to.be.an.object;
          expect(user).to.have.property("email", "user1@abc.com");
          expect(user).to.not.have.property("password");
          done();
        })
      });
    });
  });

});
