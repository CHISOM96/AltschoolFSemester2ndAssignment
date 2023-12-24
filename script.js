function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
  }
}