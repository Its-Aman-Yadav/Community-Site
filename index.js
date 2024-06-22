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
      res.status(500).json({ success: false, message: "Something went wrong. Please try again later." });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    }
  });
});

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
document.onselectstart = function() {
  return false;
};



document.querySelectorAll('.accordion button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const content = button.nextElementSibling;
    const expanded = accordionItem.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.accordion-item').forEach(item => {
      item.setAttribute('aria-expanded', 'false');
      item.querySelector('.icon').textContent = '+';
      item.querySelector('.accordion-content').style.maxHeight = '0';
    });

    if (!expanded) {
      accordionItem.setAttribute('aria-expanded', 'true');
      button.querySelector('.icon').textContent = '-';
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      accordionItem.setAttribute('aria-expanded', 'false');
      button.querySelector('.icon').textContent = '+';
      content.style.maxHeight = '0';
    }
  });
});
