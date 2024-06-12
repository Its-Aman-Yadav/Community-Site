class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Adding style for black text color */
        .form input[type="text"] {
          color: black;
        }
      </style>
      <footer>
        <div class="container">
          <div class="row1">
            <div class="company" id="Company">
              <h1>Open Source Village</h1>
              <p>Join the Community and become the villager now</p>
              <div class="social">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/open-source-village/"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
              </div>
            </div>
            <div class="col1" id="Serv">
              <h3>Services</h3>
              <div class="links">
                <a href="#">Open Learning</a>
                <a href="#">Mentorship</a>
                <a href="#">Network</a>
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

    const emailForm = this.querySelector('#emailForm');

    emailForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const emailInput = document.querySelector('#emailInput').value;
      
    
      alert("Thank you! We will connect soon.");
      
      emailForm.reset();
    });
  }
}

customElements.define("special-footer", SpecialFooter);
