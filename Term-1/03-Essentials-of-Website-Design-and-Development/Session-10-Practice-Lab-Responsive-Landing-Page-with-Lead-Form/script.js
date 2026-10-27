// Simple form validation and a GA4 lead event (no real data is sent anywhere)

// 1. Find the form and the message area
const form = document.getElementById("survey");
const message = document.getElementById("form-message");

// 2. Run this when the user clicks "Book free survey"
form.addEventListener("submit", function (event) {
  event.preventDefault();               // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const phonePattern = /^03[0-9]{9}$/;  // Pakistani mobile: 03 + 9 digits

  // 3. Check the name
  if (name === "") {
    message.textContent = "Please enter your name.";
    message.className = "form-message error";
    return;
  }

  // 4. Check the phone number
  if (!phonePattern.test(phone)) {
    message.textContent = "Please enter a mobile number like 03001234567.";
    message.className = "form-message error";
    return;
  }

  // 5. Everything is fine: show a thank-you message
  message.textContent = "Thank you, " + name + "! We will call you within 24 hours.";
  message.className = "form-message success";

  // 6. Tell Google Analytics a lead was generated (only if the GA4 tag loaded)
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", { form_name: "solar_survey" });
  }

  form.reset();                          // clear the form
});
