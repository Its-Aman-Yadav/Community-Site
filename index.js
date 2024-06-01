const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// subscribe-email-validation
document.querySelector('.subscribe__btn').addEventListener('click', function(event) {
    validateEmail();
});

function validateEmail() {
    const emailInput = document.querySelector('.subscribe__input');
    const emailError = document.getElementById('subscribe_email_error');
    const emailValue = emailInput.value;

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailValue)) {
        emailError.style.display = 'none';   
    } else {
        emailError.style.display = 'inline';
    }
}

//nav sticky
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body)
    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'email', // Your email address
            pass: 'password' // Your email password or App Password
        }
    });

    // Email options
    const mailOptions = {
        from: 'email',
        to: 'itsamanyadav18@gmail.com', // Recipient's email address
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send('Error: Something went wrong. Please try again later.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });
});

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
