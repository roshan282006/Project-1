document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if (name.length < 2) {
    nameError.textContent = "Name too short";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Invalid email";
    valid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Min 6 characters";
    valid = false;
  }

  if (valid) {
    console.log({ name, email, password });
    // API call yahan karo:
    // fetch("/api/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, password })
    // });

    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  }
});
