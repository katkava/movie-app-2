class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
      this.innerHTML = `
      <style>
      
      .nav-btn {
        border:none;
        background-color: transparent;
        cursor: pointer;
        font-size: 20px;
      }
      
      .open-btn {
        position: fixed;
        top: 10px;
        left: 10px;
      } 
      
      .nav {
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        transform: translateX(-100%); 
        transition: transform 0.3s ease-in-out;
      }
      .nav .logo {
        width: 200px;
      }
      .nav.visible {
        transform: translateX(0);
      }
      
      .nav-blue {
        background-color: rgb(39, 7, 229);
        width: 60%;
        max-width: 480px;
        min-width: 320px;
        transition-delay: 0.4s;
      }
      
      .nav-blue.visible {
        transition-delay: 0s;
      }
      .nav-purple {
        background-color: rgb(154, 0, 202);
        width: 95%;
        transition-delay: 0.2s;
      }
      
      .nav-purple.visible {
        transition-delay: 0.2s;
      }
      
      .nav-white {
        background-color: white;
        width: 95%;
        padding: 40px;
        position: relative;
       transition-delay: 0s;
      }
      
      .nav-white.visible {
        transition-delay: 0.4s;
      }
      
      .close-btn {
        opacity: 0.3;
        position: absolute;
        top: 40px;
        right: 30px;
      }
      
      .list {
        list-style-type: none;
        padding: 20px 0 0 0;
      }
      
      .list li {
        margin: 20px 0;
      }
      
      .list li a {
        padding-left: 0.5rem;
        color:  rgb(154, 0, 202);
        font-family: 'VT323', monospace;
        font-size: 20px; 
        text-decoration: none;
        text-transform: uppercase;
      }
      
      .list ul {
        list-style-type: none;
        padding-left: 20px;
      }
      
      
      .search {
        height: 30px;
        background: linear-gradient( rgb(154, 0, 202), rgb(39, 7, 229));;
        border: none;
        border-radius: 50px;
        font-family: inherit;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        color: white;
      } 
      
      .search::placeholder {
        color: white;
      }
      
      .search:focus {
        outline: none;
      }
      
      </style>
      <header>
      <button class="nav-btn open-btn">
     <i class="fas fa-bars"></i>
 </button>
 <div class="nav nav-blue">
    <div class="nav nav-purple">
        <div class="nav nav-white">
            <button class="nav-btn close-btn">
                <i class="fas fa-times"></i>
            </button>
            <a href="index.html"><img src="assets/cover.png" alt="Logo" class="logo"></a>   

            <ul class="list">
                <li><a href="movies.html">Movies</a></li>
<<<<<<< HEAD
                <li><form id="form"><input type="text" id="search" class="search" placeholder="search"></form></li>
=======
                <li><form><input type="text" id="search" class="search" placeholder="search"></form></li>
>>>>>>> cdd956d14d597c9cd2aa999756432e349f7ccd8d
            </ul>
        </div> 
    </div>
 </div>
 
</header>
      `
  }
} 


<<<<<<< HEAD

=======
>>>>>>> cdd956d14d597c9cd2aa999756432e349f7ccd8d
  customElements.define('header-component', Header);


  const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

closeBtn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
<<<<<<< HEAD


=======
>>>>>>> cdd956d14d597c9cd2aa999756432e349f7ccd8d
