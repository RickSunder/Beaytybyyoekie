$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav div.main_list ul li a').addClass('affix-text');
        $('.nav').addClass('affix');
        $('.navTrigger i').addClass('menu');
    } else {
        $('.nav div.main_list ul li a').removeClass('affix-text');
        $('.nav').removeClass('affix');
        $('.navTrigger i').removeClass('menu');
    }
});

$(document).ready(function(){
    $(this).scrollTop(0);
});


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    if ($(document).scrollTop() < 50) {
	    $('.nav').toggleClass('affix');
	    $('.navTrigger i').toggleClass('menu');
	}
    $("#mainListDiv").fadeIn();
});



$('.nav div.main_list ul li a').click(function () {
    $('.navTrigger').toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});



var coll = document.getElementsByClassName("accordion_button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("accordion_button_active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});



// Targets all textareas with class "txta"
let textareas = document.querySelectorAll('.txta'),
    hiddenDiv = document.createElement('div'),
    content = null;

// Adds a class to all textareas
for (let j of textareas) {
  j.classList.add('txtstuff');
}

// Build the hidden div's attributes

// The line below is needed if you move the style lines to CSS
// hiddenDiv.classList.add('hiddendiv');

// Add the "txta" styles, which are common to both textarea and hiddendiv
// If you want, you can remove those from CSS and add them via JS
hiddenDiv.classList.add('txta');

// Add the styles for the hidden div
// These can be in the CSS, just remove these three lines and uncomment the CSS
hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

// Loop through all the textareas and add the event listener
for(let i of textareas) {
  (function(i) {
    // Note: Use 'keyup' instead of 'input'
    // if you want older IE support
    i.addEventListener('input', function() {
      
      // Append hiddendiv to parent of textarea, so the size is correct
      i.parentNode.appendChild(hiddenDiv);
      
      // Remove this if you want the user to be able to resize it in modern browsers
      i.style.resize = 'none';
      
      // This removes scrollbars
      i.style.overflow = 'hidden';

      // Every input/change, grab the content
      content = i.value;

      // Add the same content to the hidden div
      
      // This is for old IE
      content = content.replace(/\n/g, '<br>');
      
      // The <br ..> part is for old IE
      // This also fixes the jumpy way the textarea grows if line-height isn't included
      hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

      // Briefly make the hidden div block but invisible
      // This is in order to read the height
      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      i.style.height = hiddenDiv.offsetHeight + 'px';

      // Make the hidden div display:none again
      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    });
  })(i);
}





$("#submit").click(function(){
  event.preventDefault();

  var name = $("#name").val();
  var email= $("#email").val();
  var message = $("#message").val();
  var phonenumber = $("#phonenumber").val();

  console.log(name);

  $.ajax({
    type:'POST',
    url:'phpbestand/gegevens.php',
    data:{
      name:name,
      email:email,
      message:message,
      phonenumber:phonenumber
    },
    success:function(data){
      var name = null;
      var email = null;
      var message = null;
      var phonenumber = null;
      alert(data)

      if(data.trim() === "bericht ontvangen"){
        alert("Bericht is verstuurd, u ontvangt zo snel mogelijk reactie"); 
        location.reload();
        document.getElementById("upload_form").reset();
      } else {
        alert('Het bericht kon helaas niet verzonden worden, u kunt altijd bellen, mailen of het later nog eens proberen.'); 
        location.reload();
      }
      
    }
  });
});


    