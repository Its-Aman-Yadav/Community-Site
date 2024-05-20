// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("feedbackForm");
//   const confirmationMessage = document.getElementById("confirmationMessage");

//   form.addEventListener("submit", function (event) {
//       event.preventDefault();

//       const category = document.getElementById("category").value;
//       const message = document.getElementById("message").value;
//       const contact = document.getElementById("contact").value;

//       if (category && message) {
//           // Simulate form submission (you can replace this with an actual AJAX request)
//           console.log("Category:", category);
//           console.log("Message:", message);
//           console.log("Contact:", contact);

//           // Show confirmation message
//           confirmationMessage.style.display = "block";

//           // Reset the form
//           form.reset();
//       } else {
//           alert("Please fill out the required fields.");
//       }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const feedbackButton = document.getElementById("feedbackButton");
  const feedbackFormContainer = document.getElementById("feedbackFormContainer");
  const form = document.getElementById("feedbackForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  feedbackButton.addEventListener("click", function () {
      feedbackFormContainer.style.display = "block";
  });

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const category = document.getElementById("category").value;
      const message = document.getElementById("message").value;
      const contact = document.getElementById("contact").value;

      if (category && message) {
          // Simulate form submission (you can replace this with an actual AJAX request)
          console.log("Category:", category);
          console.log("Message:", message);
          console.log("Contact:", contact);

          // Show confirmation message
          confirmationMessage.style.display = "block";

          // Reset the form
          form.reset();
      } else {
          alert("Please fill out the required fields.");
      }
  });
});

