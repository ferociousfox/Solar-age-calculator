
import { User } from './../js/User.js';

$(document).ready(function(){
  alert("document Ready!");
  $('#calculate').submit(function(event) {
    event.preventDefault();
    alert('submit!');
    // var dOB = $('#birthday').val();
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var userAge = parseInt($('#user-age').val());
    var user = new User(firstName, lastName, userAge);
    console.log(user);
    $('#user-id').append(user.firstName + " " + user.lastName + ' you are');
    $('#your-mercury-age').append(user.mercuryAge() + ' seconds old');
    $('#your-venus-age').append(user.venusAge() + ' seconds old');
    $('#your-earth-age').append(user.ageInSeconds() + ' seconds old');
    $('#your-mars-age').append(user.marsAge() + ' seconds old');
    $('#your-jupiter-age').append(user.jupiterAge() + ' seconds old');
  });
});
