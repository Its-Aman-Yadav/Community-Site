class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Adding style for black text color */
        .form input[type="text"] {
          color: black;
        }
        /* Setting all social media icons to yellow by default */
        .fab.fa-whatsapp,
        .fab.fa-facebook,
        .fab.fa-instagram,
        .fab.fa-linkedin,
        .fab.fa-x-twitter,
        .fab.fa-github,
        .fa-solid.fa-envelope 
        {
          color: yellow;
          transition: color 0.3s, background 0.3s;
        }

        /* Hover effects for social media icons */
        /* WhatsApp green */
        .fab.fa-whatsapp:hover 
        {
          color: #25D366; 
        }
        /* Facebook blue */
        .fab.fa-facebook:hover 
        {
          color: #1877F2; 
        }
        /* Insta darkPink */
        .fab.fa-instagram:hover 
        {
         color: #dc2743;
        }
         /* LinkedIn blue */
        .fab.fa-linkedin:hover 
        {
          color: #0A66C2; 
        }
        /* Twitter light black*/
        .fab.fa-x-twitter:hover 
        {
          color: #333; 
        }
        /* GitHub light black */
        .fab.fa-github:hover 
        {
          color: #333; 
        }
        /* Red for email */
        .fa-solid.fa-envelope:hover 
        {
          color: #D44638; 
        }
      </style>
      <footer>
        <div class="container">
          <div class="row1">
            <div class="company" id="Company">
              <h1 style="color: yellow;">Open Source Village</h1>
              <p>Join the Community and become the villager now</p>
              <div class="social">
                <a href="#"><i class="fab fa-whatsapp"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/open-source-village/"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-x-twitter"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fa-solid fa-envelope"></i></a>
              </div>
            </div>
            <div class="col1" id="Serv">
              <h3>Services</h3>
              <div class="links">
                <a href="open-learning.html">Open Learning</a>
                <a href="mentorship.html">Mentorship</a>
                <a href="network.html">Network</a>
                <a href="#">Card Design</a>
              </div>
            </div>
            <div class="col1" id="useful-links">
              <h3>Links</h3>
              <div class="links">
                <a href="about us.html">About</a>
                <a href="our plan.html">Our Plan</a>
                <a href="our program.html">Our Program</a>
                <a href="member.html">Become a Member</a>
                <a href="support.html">Support</a>
              </div>
            </div>
            <div class="col1" id="legal">
              <h3>Legal</h3>
              <div class="links">
                <a href="terms&conditions.html">Terms and Conditions</a>
                <a href="privacypolicy.html">Privacy Policy</a>
              </div>
            </div>

            <div class="col1" id="cont">
              <h3>Contact</h3>
              <div class="contact-details">
                <div class="links">
                  <a href="#"><i class="fa fa-message"></i>Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row2">
          <div class="form">
            <form id="emailForm">
              <input type="text" id="emailInput" placeholder="Email here...">
              <button type="submit"><i class="fa fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <hr></hr>
        <p class="copyright">
          Copyright ©
          <script>document.write(new Date().getFullYear());</script>
          Developed by Open source Contributors. All rights reserved.
        </p>
      </footer>`;

    document.addEventListener('DOMContentLoaded', function () {
      const emailForm = document.querySelector('#emailForm');

      emailForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.querySelector('#emailInput').value;

        if (!validateEmail(emailInput)) {
          alert("Please enter a valid email address.");
          return;
        }

        alert("Thank you! We will connect soon.");

        emailForm.reset();
      });

      /* Function for checking if email is valid or not */
      function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
      }
    });
  }
}

customElements.define("special-footer", SpecialFooter);
