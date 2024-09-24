let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">Hakan Ozcan</a>
              
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
              <span class="contact"><a href="mailto:ozcanhakanzi@gmail.com" class="email">
                <img src="./img/email.png" alt="email me"> &nbsp; &nbsp;
                ozcanhakanzi@gmail.com</a></span>
            </div>
           
            <div class="social-links text-center">
              <a href="https://www.linkedin.com/in/iamdivyak/"><img src="./img/LinkedIn Circled.png" alt="linkedin"></a><br>
              <!-- <a href=""><img src="./img/Instagram.png" alt="Instagram"></a><br> -->
              <a href="https://twitter.com/Imdivyakumari"> <img src="./img/Twitter.png" alt="twitter"></a><br>
              <a href="https://github.com/Iamdivyak"><img src="./img/GitHub.png" alt="github"></a>  
              
            </div>
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}

// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  window.scrollY > amountScrolled 
    ? btnBackToTop.classList.add('back-to-top_show')
    : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);
