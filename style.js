// ===============================
// ✅ EMAILJS + FORM SUBMIT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  // 🔹 EMAILJS INIT (YOUR PUBLIC KEY)
  emailjs.init("Jl9wk-BebYnqC888j"); // <-- change this

  const form = document.querySelector(".login-form");
  const msg = document.getElementById("successMsg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // ❌ stop refresh

      emailjs.sendForm(
        "service_jvpqzb6",   // <-- change this
        "template_g2fsb9s",  // <-- change this
        this
      )
      .then(function () {

        // ✅ SUCCESS
        form.reset(); // clear all fields

        if (msg) {
          msg.style.display = "block";
          msg.innerText = "Message sent successfully ✅";
        }

        setTimeout(() => {
          if (msg) msg.style.display = "none";
        }, 3000);

      }, function (error) {

        // ❌ ERROR
        alert("Failed ❌ " + JSON.stringify(error));

      });
    });
  }

});


// ===============================
// ✅ MOBILE MENU (HAMBURGER)
// ===============================

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) {
    nav.classList.toggle("active");
  }
}


// ===============================
// ✅ LET'S TALK SCROLL → LOGIN
// ===============================

function goToLogin() {
  const section = document.getElementById("login");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}


// ===============================
// ✅ SMOOTH SCROLL (NAV LINKS)
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});