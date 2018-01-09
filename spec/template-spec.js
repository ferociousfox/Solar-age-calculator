import { User } from './../js/User.js';


describe('', function(){
  it("should be a new instance of the User object constructor", function(){
      var user = new User;
      expect(user).toBeObject();
    })
  it("should be a number when you input your age", function(){
      var user = new User("dave", "bowman", 30);
      expect(user.ageInSeconds()).toBeNumber();
    })
  it('return users age in seconds', function(){
    var user = new User("dave", "bowman", 30);
    expect(user.ageInSeconds()).toEqual(946080000);
  })
});
