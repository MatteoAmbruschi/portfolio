
const backBtn = document.getElementById('backBtn');
const debounceDelay = 100; // Delay di debounce in millisecondi

backBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const handleScroll = debounce(function() {
    let posY = window.scrollY;
    if (posY > 600) {
        gsap.to(backBtn, { opacity: 1, cursor: 'pointer', duration: 0.3 });
    } else {
        gsap.to(backBtn, { opacity: 0, cursor: 'default', duration: 0.3 });
    }
}, debounceDelay);

window.addEventListener('scroll', handleScroll);



function handleScrollEvent(id, threshold1, threshold2) {
  const element = document.getElementById(id);
  window.addEventListener('scroll', function() {
    const btnY = window.scrollY;
    if (window.innerWidth > 768) {
      let fontSize = '12px';
      if (btnY < threshold1) {
        fontSize = '16px';
      } else if (btnY < threshold2) {
        fontSize = '14px';
      }
      element.style.fontSize = fontSize;
    }
  });
}

handleScrollEvent('idbtn', 500, 700);
handleScrollEvent('idbtn1', 500, 700);
handleScrollEvent('idbtn2', 500, 700);



const LogoUp = document.getElementById('LogoUp');
const outline = document.querySelector('.outline');
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const myButton = document.querySelector('#myButton');

// Funzione per il click sul pulsante LogoUp
LogoUp.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

// Funzione per il movimento del cursore
document.addEventListener('mousemove', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  const translation = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;

  outline.style.transform = translation;
  cursor.style.transform = translation;
});

// Funzioni per l'hover sui link
function addHoverClass() {
  outline.classList.add('hover');
  cursor.classList.add('hover');
}

function removeHoverClass() {
  outline.classList.remove('hover');
  cursor.classList.remove('hover');
}

// Aggiunta degli event listener per l'hover sui link
links.forEach(link => {
  link.addEventListener("mouseover", addHoverClass);
  link.addEventListener("mouseleave", removeHoverClass);
});

// Funzione per il click sul pulsante myButton
myButton.addEventListener('click', () => {
  window.location.replace('cookie.html');
});






//////GSAP

gsap.to(".hero", { opacity: 1, duration: 2.5,});
gsap.to(".hero-cta", { opacity: 1, duration: 1, y: 20, delay: 0.2,});


const button = document.querySelector('.button');
// Crea un observer per rilevare quando l'elemento entra a schermo
{const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Quando l'elemento entra a schermo, attiva l'animazione con GSAP
      gsap.to('.button', { opacity: 1, duration: 2, stagger: 0.2 });
      observer.unobserve(entry.target);
    }
  });
});
// Aggiungi l'elemento all'observer
observer.observe(button);}



// ----------------------------------------------Observer 
// elements
// callback
var callback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-page");
    } else {
      entry.target.classList.remove("in-page");
    }
  });
};

// observer
var observer = new IntersectionObserver(callback, { threshold: 0.35 });

// apply
document.querySelectorAll('.watch').forEach(element => {
  observer.observe(element);
});
