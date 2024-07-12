
    document.addEventListener('DOMContentLoaded', (event) => {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');

        // Function to remove active class from all links
        const removeActiveClass = () => {
            navLinks.forEach(link => {
                link.classList.remove('active1');
            });
        };

        // Function to add active class to the current link
        const addActiveClass = (id) => {
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active1');
            }
        };

        // Intersection Observer to detect when sections are in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    removeActiveClass();
                    addActiveClass(entry.target.id);
                }
            });
        }, { threshold: 0.5 }); // Adjust threshold to your needs

        // Observe each section
        sections.forEach(section => {
            observer.observe(section);
        });

        // Smooth scrolling for links
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                document.querySelector(link.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

    



const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// Subscribe email validation
app.post("/validate-email", (req, res) => {
  const { email } = req.body;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email)) {
    res.status(200).json({ valid: true });
  } else {
    res.status(400).json({ valid: false, message: "Invalid email format" });
  }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com", // Your email address
      pass: "your_password", // Your email password or App Password
    },
  });

  // Email options
  const mailOptions = {
    from: "your_email@gmail.com",
    to: "recipient_email@gmail.com", // Recipient's email address
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } else {
      console.log("Email sent: " + info.response);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    }
  });
});

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
document.onselectstart = function () {
  return false;
};

document.querySelectorAll(".accordion button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const content = button.nextElementSibling;
    const expanded = accordionItem.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      item.querySelector(".icon").textContent = "+";
      item.querySelector(".accordion-content").style.maxHeight = "0";
    });

    if (!expanded) {
      accordionItem.setAttribute("aria-expanded", "true");
      button.querySelector(".icon").textContent = "-";
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      accordionItem.setAttribute("aria-expanded", "false");
      button.querySelector(".icon").textContent = "+";
      content.style.maxHeight = "0";
    }
  });
  s;
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCllQUQTUvYXL1Sr0fLwHsaKXrlyzVkz4",
  authDomain: "login-with-firebase-data-72633.firebaseapp.com",
  databaseURL:
    "https://login-with-firebase-data-72633-default-rtdb.firebaseio.com",
  projectId: "login-with-firebase-data-72633",
  storageBucket: "login-with-firebase-data-72633.appspot.com",
  messagingSenderId: "293527989470",
  appId: "1:293527989470:web:ffa1a88282320903bd664f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const database = firebase.database();

// Register function
function register() {
  // Get all input fields
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;
  let full_name = document.getElementById("registerName").value;

  // Validate input fields
  if (!validate_email(email) || !validate_password(password)) {
    alert("Email or Password is Outta Line!!");
    return;
  }
  if (!validate_field(full_name)) {
    alert("One or More Extra Fields is Outta Line!!");
    return;
  }

  // Proceed with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        full_name: full_name,
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);

      // Done
      alert("User Created!!");
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_message = error.message;
      alert(error_message);
    });
}

// Login function
function login() {
  // Get all input fields
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Validate input fields
  if (!validate_email(email) || !validate_password(password)) {
    alert("Email or Password is Outta Line!!");
    return;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      // Done
      alert("User Logged In!!");
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_message = error.message;
      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  return password.length >= 6;
}

function validate_field(field) {
  return field != null && field.length > 0;
}
