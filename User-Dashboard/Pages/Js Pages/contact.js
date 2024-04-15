

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

  // If form validation is successful, show the popup
  if (isValid) {
    document.getElementById("popup").style.display = "block";
    return false; // Prevent form submission
  }
  return isValid;
}

// Function to show success popup
function showSuccessPopup() {
  const popup = document.getElementById('popup');
  popup.innerHTML = `
      <img src="/User-Dashboard/Images/check.png">
      <h2 id="ht">Thank you</h2>
      <p>Your Message sent Successfully!</p>
      <button type="button" onclick="closePopup()">Ok</button>
  `;
  popup.style.display = "block";
}

// Function to show error popup
function showErrorPopup() {
  const popup = document.getElementById('popup');
  popup.innerHTML = `
      <img src="/User-Dashboard/Images/error.png">
      <h2 id="ht">Error</h2>
      <p>Failed to send message. Please try again later.</p>
      <button type="button" onclick="closePopup()">Ok</button>
  `;
  popup.style.display = "block";
}

// Function to close popup
function closePopup() {
  document.getElementById('popup').style.display = "none";
}




document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();
 
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
 
  try {
     const response = await fetch('https://my-brand-backend-heoy.onrender.com/messages', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
     });
 
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
 
     const result = await response.json();
     console.log(result);
     // Show a success message or redirect the user
  } catch (error) {
     console.error('There was a problem with your fetch operation:', error);
     // Show an error message
  }
 });
 

