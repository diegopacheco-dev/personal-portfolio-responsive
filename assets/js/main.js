/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => {
    n.addEventListener('click', linkAction)
})


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;  //Devuelve el alto de un elemento
        const sectionTop = current.offsetTop - 50;   // offsetTop devuelve el número de pixeles desde el borde superior del elemento padre más cercano (relative)
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){  // Si el scroll se encuentra dentro del section
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')            
        }
    })

}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    console.log(this);
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    console.log(this);
}
window.addEventListener('scroll', scrollTop)


/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer =  mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
})


/* Link active portfolio */ 
//html collection con todos los portfolio__item
const linkPortfolio = document.querySelectorAll('.portfolio__item');

function activePortfolio(e){
    if(linkPortfolio){
        //al hacer click en un portfolio__item borramos de los demas la clase active__portfolio
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
        //agregamos al elemento activador del evento la clase active-portfolio
        e.target.classList.add('active-portfolio')  //tambien se puede usar this en vez de e.target
        console.log("Este es el this de la funcion activePortfolio");
        console.log(this);
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))



/*===== SWIPER CAROUSEL =====*/ 
const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        640:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView: 3,
        }

    }
  }); 

/*===== GSAP ANIMATION =====*/ 
gsap.from('.home__img', {opacity: 0, duration: 2, delay:.5, x: 60});
gsap.from('.home__data', {opacity: 0, duration: 2, delay:.8, y: 25});
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay:1, y: 25, ease:'expo.out', stagger:.2});

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1.5, delay:1, y: 25, ease:'expo.out', stagger:.2});
gsap.from('.nav__item', {opacity: 0, duration: 1.8, delay:1, y: 25, ease:'expo.out', stagger:.2});
gsap.from('.home__social-icon', {opacity: 0, duration: 1.8, delay:2.3, y: 25, ease:'expo.out', stagger:.2});
