class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Adding style for black text color */
        .form input[type="text"] {
          color: black;
        }
        .fab.fa-whatsapp,
        .fab.fa-facebook,
        .fab.fa-instagram,
        .fab.fa-linkedin,
        .fab.fa-x-twitter,
        .fab.fa-github,
        .fa-solid.fa-envelope 
        {
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
              <h1 >Open Source Village</h1>
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
                <a href="contributor.html">Contributors</a>
              </div>
            </div>
            <div class="col1" id="legal">
              <h3>Legal</h3>
              <div class="links">
                <a href="terms&conditions.html">Terms and Conditions</a>
                <a href="privacypolicy.html">Privacy Policy</a>
                <a href="licensing.html">Licensing</a>

              </div>
            </div>

            <div class="col1" id="cont">
              <h3>Contact</h3>
              <div class="contact-details">
                <div class="links">
                  <a href="contact us.html"><i class="fa fa-message"></i>Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row2">
          <div class="form">
            <form id="emailForm" class="emailFormFlex">
              <input type="text" id="emailInput" placeholder="Email here...">
              <button type="submit" class="submit"><i class="fa fa-paper-plane"></i></button>
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

    document.addEventListener("DOMContentLoaded", function () {
      createPopup();

      const emailForm = document.getElementById("emailForm");
      emailForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("emailInput").value;
        if (!validateEmail(email)) {
          showPopup("Invalid email address.", "#f44336"); // Red color for invalid email
        } else {
          showPopup("Thank you, we will connect soon.", "#4CAF50"); // Green color for valid email
        }
      });
    });

    // Create and style the popup dynamically
    function createPopup() {
      const popup = document.createElement("div");
      popup.id = "popup";
      popup.style.visibility = "hidden";
      popup.style.minWidth = "250px";
      popup.style.marginLeft = "-125px";
      popup.style.backgroundColor = "#f44336";
      popup.style.color = "white";
      popup.style.textAlign = "center";
      popup.style.borderRadius = "2px";
      popup.style.padding = "16px";
      popup.style.position = "fixed";
      popup.style.zIndex = "1";
      popup.style.right = "30px";
      popup.style.top = "300px";
      popup.style.fontSize = "17px";
      popup.style.transition = "visibility 0s, opacity 0.5s linear";
      document.body.appendChild(popup);
    }

    function showPopup(message, color) {
      const popup = document.getElementById("popup");
      popup.innerText = message;
      popup.style.backgroundColor = color;
      popup.style.visibility = "visible";
      popup.style.opacity = "1";
      setTimeout(() => {
        popup.style.opacity = "0";
        popup.style.visibility = "hidden";
      }, 3000);
    }

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  }
}

customElements.define("special-footer", SpecialFooter);
