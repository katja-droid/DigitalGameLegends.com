document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const successMsg = document.getElementById("form-success");

  if (form.checkValidity()) {
    successMsg.style.display = "block";
    form.reset();
  }
});
