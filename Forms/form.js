const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  
  if (!isValidName(name)) {
    alert("Invalid name. Name must contain only letters and spaces.");
    return;
  }
  
  if (!isValidEmail(email)) {
    alert("Invalid email.");
    return;
  }
  
  if (!isValidPassword(password)) {
    alert("Invalid password. Password must be at least 6 characters long.");
    return;
  }
  
  // if all data is valid, submit the form
  form.submit();
});

function isValidName(name) {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(name);
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPassword(password) {
  return password.length >= 6;
}
