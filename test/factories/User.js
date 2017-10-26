module.exports = function(factory) {
  factory.define("user1")
    .attr("email", "123@abc.com")
    .attr("password", "pass1234")
    .attr("firstName", "First")
    .attr("lastName", "Last")
    .attr("picture", "//domain.com/photo.jpg")
};
