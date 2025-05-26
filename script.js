let menu = document.querySe1ector('#menu-icon') ;
let navbar = document.queryselector('.navbar') ;

menu.onclick = () => {
    menu.classList.toggle('bx-x') ;
    navbar.classList.toggle('active') ;
}

window.onscroll = () => {
    menu.classList.remove('bx-x') ;
    navbar.classList.remove('active') ;
}

const typed = new Typed('.multiple-text', {
      strings: ['mern stack developer', 'aiml enthusiast'],
      typeSpeed: 80,
      backspeed: 80,
      backDelay: 1200,
      loop: true,
    });