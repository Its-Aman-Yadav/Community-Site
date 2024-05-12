const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
require('dotenv').config();

// Middleware
const pathtoPublic=
app.use(express.json())
app.use(express.static(path.join(__dirname,'./public')))
app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

const EMAIL=process.env.EMAIL
const PASS=process.env.PASS

// Routes
app.post('/send-email',async (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body)
    // Create a transporter
    const transporter =await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${EMAIL}`, 
            pass: `${PASS}` 
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
    console.log(`Server is running on port ${PORT}: http://localhost:5500/`);
});
