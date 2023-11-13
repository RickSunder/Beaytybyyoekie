$(document).ready() {
  var request;

  $( "#contact-form" ).submit(function( event ) {
   
    // Stop form from submitting normally
    event.preventDefault();

   // Abort any pending request
      if (request) {
          request.abort();
      }

    // Get some values from elements on the page:
    var $form = $( this ),
      name = $form.find( "input[name='naam']" ).val(),
      email = $form.find( "input[name='mail']" ).val(),
      phonenumber = $form.find( "input[name='telefoonnummer']" ).val(),
      message = $form.find( "input[name='bericht']" ).val(),
      url = $form.attr( "action" );
   
    // Serialize the data in the form
      var serializedData = $form.serialize();

      // Let's disable the inputs for the duration of the Ajax request.
      // Note: we disable elements AFTER the form data has been serialized.
      // Disabled form elements will not be serialized.
      $inputs.prop("disabled", true);
    
    // Fire off the request to /form.php
      request = $.post('/index.php', serializedData, function(response) {
    // Log the response to the console
    console.log("Response: "+response);
});
      

    // Send the data using post
    // var posting = $.post( url, { name: name, email: email, phonenumber: phonenumber, message: message } );
   
    // Put the results in a div
    //posting.done(function( data ) {
      //alert("this is a test")
    //});
  });
 }