/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/
function user(name, email, username, password) {
	  this.name = name;
	  this.email = email;
	  this.username = username;	
	  this.password = password;
	  this.isLoggedIn = false;
}


$('document').ready(function() {
	//login and signup forms hide/show code

	$('.login-form-btn').click(function() {
	  $('.signup-form-btn').removeClass('active');
	  $('.login-form-btn').addClass('active');
	  $('.signup-form').css('display','none');
	  $('.login-form').css('display','block');

	});
	$('.signup-form-btn').click(function() {
	  $('.login-form-btn').removeClass('active');
	  $('.signup-form-btn').addClass('active');
	  $('.login-form').css('display','none');
	  $('.signup-form').css('display','block');
	  
	});

	//Login code 
	$('.btn-login').click(function(){
	  var person = new user('','',$('#login-username-field').val(), $('#login-password-field').val());
	  $('.form-feedback').empty();
	  if(codepen.api.login(person).success){
	  	$('.form-feedback').html('Logged In!');
	  	person.isLoggedIn = true;
	  }
	  else{
	  	$('.form-feedback').html(codepen.api.login(person).error);
	  }
	});

	//Signup code
	$('.btn-signup').click(function(){
      $('.form-feedback').empty();
	  var person = new user ( $('#signup-name-field').val(),  $('#signup-email-field').val(),  $('#signup-username-field').val(),  $('#signup-password-field').val());
	  if($('#signup-password-field').val() !== $('#signup-password-field2').val()){
	  	$('.form-feedback').html('Passwords Do Not Match');
	  }
	  else{
	    if(codepen.api.signup(person).success){
	  	  $('.form-feedback').html('Signed Up!');
	    }
	    else{
	  	  $('.form-feedback').html(codepen.api.signup(person).error);
	    }
	  }
	});

});
