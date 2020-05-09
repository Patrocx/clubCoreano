//Get all necesary items to interactive with the users
const btn = document.getElementsByClassName('hamburger');
const nav = document.getElementsByClassName('nav-container');

//Hamburger btn functions
btn[0].onclick = function() {
    if(nav[0].classList == 'nav-container open') {
        nav[0].classList.add('out');
        Array.from(btn[0].children).forEach(child => {
            child.classList.add('out')
        })
        setTimeout(function(){
            nav[0].classList.remove('open')
            nav[0].classList.remove('out')
            Array.from(btn[0].children).forEach(child => {
                child.classList.remove('active')
                child.classList.remove('out')
                btn[0].classList.remove('active')
            })
        }, 500);
    } else {
        nav[0].classList.toggle('open');
        btn[0].classList.toggle('active');
        Array.from(btn[0].children).forEach(child => {
            child.classList.add('active')
        })
    }
}

//Nav controlled with scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName('nav')[0].style.top = '0';
  } else {
    document.getElementsByClassName('nav')[0].style.top = '-10vh';
  }
  prevScrollpos = currentScrollPos;
}