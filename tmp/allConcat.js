

$(document).ready(function(){
  $('#submit').submit(function(event) {
    event.preventDefault();
    var dOB = $('#birthday').val();
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var userAge = $('#user-age').val();
    var user = new User(firstName, lastName, userAge);

    $('#your-mercury-age').append();
    $('#your-venus-age').append();
    $('#your-earth-age').append();
    $('#your-mars-age').append();
    $('#your-jupiter-age').append();
  })
});












// import { test } from './../js/scripts.js';
//
// $(document).ready(function(){
//   alert('document ready');
//   let backendTest = test();
//   console.log(backendTest);
//   $('h1').append(backendTest);
// });
