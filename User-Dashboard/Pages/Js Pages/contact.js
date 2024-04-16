function submitForm() {
  
  alert('Thank you for contacting us!');
  
  document.getElementById('contact-form').reset();

  return false;
}

// Side Navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "118px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Form Validation
function validateForm() {
  var isValid = true;

  // Validate Name
  var name = document.getElementById("name").value;
  if (name.trim() === "") {
    document.getElementById("username-error").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("username-error").style.display = "none";
  }

  // Validate Email
  var email = document.getElementById("email").value;
  if (email.trim() === "") {
    document.getElementById("email-error").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("email-error").style.display = "none";
  }

  // Validate Message
  var message = document.getElementById("message").value;
  if (message.trim() === "") {
    document.getElementById("message-error").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("message-error").style.display = "none";
  }
}