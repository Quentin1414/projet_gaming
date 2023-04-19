let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let mario = document.getElementById('mario');
let retro = document.querySelector('.retro');
let slogen = document.querySelector('.slogen');
let nav = document.getElementById('nav');
let sticky= nav.offsetTop;
window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 4 + 'px'
    mountains3.style.top = value * 1.5 + 'px'
    mountains4.style.top = value * 1.2 + 'px'
    river5.style.top = value * 1.2 + 'px'
    mario.style.left = value * 4 + 'px'
    retro.style.fontSize = value  + 'px'
    slogen.style.bottom = value *2+'px'

    if (scrollY >= 67) {
        retro.style.fontSize = 67 + 'px'
        retro.style.position = 'fixed'
        slogen.style.position='fixed'
        if (scrollY >= 513) {
            retro.style.display = 'none';


        } else {
            retro.style.display = 'block';
            slogen.style.display = 'block';
            

        }
        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281 ,#10001f)'
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'

        }

    }

};
function stick() {
    if (window.pageYOffset >= sticky) {
      nav.classList.add("sticky")
    } else {
      nav.classList.remove("sticky");
    }
  } 
