// freccia torna su
const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function() {
    window.scrollTo(0,0);
});

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


//3 pulsanti viola lavoro
function handleScrollEvent(id, threshold1, threshold2) {
  const element = document.getElementById(id);
  const mediaQuery = window.matchMedia('(min-width: 769px)');

  function updateFontSize() {
    const btnY = window.scrollY;
    let fontSize = '12px';
    
    if (btnY < threshold1) {
      fontSize = '16px';
    } else if (btnY < threshold2) {
      fontSize = '14px';
    }
    
    element.style.fontSize = fontSize;
  }

  if (mediaQuery.matches) {
    window.addEventListener('scroll', updateFontSize);
  }
}

handleScrollEvent('idbtn', 500, 700);
handleScrollEvent('idbtn1', 500, 700);
handleScrollEvent('idbtn2', 500, 700);




//modifica mouse
const LogoUp = document.getElementById('LogoUp');
LogoUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

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


const button = document.querySelector('.button');
// Crea un observer per rilevare quando l'elemento entra a schermo
{const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Quando l'elemento entra a schermo, attiva l'animazione con GSAP
      gsap.to('.button', { opacity: 1, duration: 1, stagger: 0.2 });
      observer.unobserve(entry.target);
    }
  });
});
// Aggiungi l'elemento all'observer
observer.observe(button);}



//Observer 
var callback = function(entries, observer) {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (entry.isIntersecting) {
      entry.target.classList.add("in-page");
    } else {
      entry.target.classList.remove("in-page");
    }
  }
};

var observer = new IntersectionObserver(callback, { threshold: 0.35 });

var watchElements = document.querySelectorAll('.watch');
watchElements.forEach(function(element) {
  observer.observe(element);
});
