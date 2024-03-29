// freccia torna su
const backBtn = document.getElementById('backBtn');

window.addEventListener('scroll', function() {
    let posY = window.scrollY;

    if(posY > 600) {
        backBtn.style.opacity = '1';
        backBtn.style.cursor = 'pointer';
    } else {
        backBtn.style.opacity = '0';
        backBtn.style.cursor = 'default';
    }
});




//modifica mouse
const outline = document.querySelector('.outline');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', ({ clientX: x, clientY: y }) => {
  const translateValue = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  outline.style.transform = translateValue;
  cursor.style.transform = translateValue;
});

const links = document.querySelectorAll('a');
const handleLinkHover = (event) => {
  outline.classList.toggle('hover', event.type === 'mouseover');
  cursor.classList.toggle('hover', event.type === 'mouseover');
};

links.forEach((link) => {
  link.addEventListener("mouseover", handleLinkHover);
  link.addEventListener("mouseleave", handleLinkHover);
});



/* 

// Pulsante coockie
const myButton = document.querySelector('#myButton');

myButton.addEventListener('click', () => {
  window.location.replace('cookie.html');
});

 */



//////GSAP

gsap.to(".hero", { opacity: 1, duration: 2.5,});
gsap.to(".hero-cta", { opacity: 1, duration: 1, y: 20, delay: 0.2,});


//3 pulsanti viola lavoro
if(window.innerWidth > 769){

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    function handleScrollEvent(id) {
      gsap.to(id, {
        fontSize: '12px',
        padding: '10px 20px',
        duration: 1,
        scrollTrigger: {
          scrub: 1,
          trigger: id,
          start: "top 90%",
          end: "bottom 10%",
        /*   markers: true, */
        }
      });
    }
  
    const ids = ['idbtn', 'idbtn1', 'idbtn2'];
    ids.forEach(id => handleScrollEvent(`#${id}`)); 
  
  });
}


const button = document.querySelector('.button');
{const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.to('.button', { opacity: 1, duration: 1.3, stagger: 0.3 });
      observer.unobserve(entry.target);
    }
  });
});
observer.observe(button);}



//Lavori
const watchElements  = document.querySelectorAll('.watch')

watchElements.forEach((watch) => {
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
      gsap.to(watch, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        scrollTrigger: {
          scrub: 1,
          trigger: watch,
          start: "top 90%",
          end: "bottom 65%",
        },
      })
  });
})



//lenis locomotive scroll
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)