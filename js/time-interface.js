
import { User } from './../js/scripts.js';

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

    $('#your-mercury-age').append(user.mercuryAge());
    $('#your-venus-age').append(user.venusAge());
    $('#your-earth-age').append(userAge);
    $('#your-mars-age').append(user.marsAge());
    $('#your-jupiter-age').append(user.jupiterAge());
  });
});
