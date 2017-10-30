module.exports = function(factory) {
  factory.define("user1")
    .attr("email", "user1@abc.com")
    .attr("password", "pass1234")
    .attr("firstName", "User")
    .attr("lastName", "One")
    .attr("picture", "//domain.com/photo.jpg")
};
