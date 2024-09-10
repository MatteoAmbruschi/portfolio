gsap.registerPlugin(ScrollTrigger)

Splitting(); 

// freccia torna su
const backBtn = document.getElementById('backBtn');

window.addEventListener('scroll', function() {
    let posY = window.scrollY;

    if(posY > 600) {
        backBtn.style.opacity = '1';
        backBtn.style.zIndex = '1'
    } else {
        backBtn.style.opacity = '0';
        backBtn.style.zIndex = '-1'
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

let buttonlink = document.querySelectorAll('button');
let a = document.querySelectorAll('a');
let logoImg = document.querySelectorAll('.logoImg');
let buttonLoad = document.getElementById('button-load');
let buttonLoad2 = document.getElementById('button-load2');

let links = [...buttonlink, ...a, ...logoImg, backBtn, buttonLoad, buttonLoad2].filter(Boolean);

const handleLinkHover = (event) => {
  outline.classList.toggle('hover', event.type === 'mouseover');
  cursor.classList.toggle('hover', event.type === 'mouseover');
};

links.forEach((link) => {
  link.addEventListener('mouseover', handleLinkHover);
  link.addEventListener('mouseleave', handleLinkHover);
});


//SLPLITING
const results = Splitting({
  target: '.hero', // Target la sezione hero
  by: 'cells',     // Segmenta in celle (griglia)
  rows: 10,         // Numero di righe nella griglia
  columns: 20      // Numero di colonne nella griglia
});

const cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    cell.style.background = '#FFFFFF'; 
    cell.style.mixBlendMode= 'difference';
    setTimeout(() => {
      cell.style.background = 'none'
    }, 370)
  });
});



//////GSAP
gsap.to(".hero-content", { opacity: 1, duration: 2.5,});
gsap.to(".hero-cta", { opacity: 1, duration: 1, y: 30, delay: 0.2,});


//3 pulsanti viola lavoro
if(window.innerWidth > 769){

  document.addEventListener("DOMContentLoaded", () => {

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

document.addEventListener("DOMContentLoaded", () => {
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
})


//Lavori
const watchElements  = document.querySelectorAll('.watch')

watchElements.forEach((watch) => {
  document.addEventListener("DOMContentLoaded", () => {
      gsap.from(watch, {
        opacity: 0.2,
        scale: 0.8,
        filter: 'blur(3px)',
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



// Funzione per generare lettere casuali
const randomLettersContainer = document.querySelector(".random-letters");

function generateRandomLetters() {
    const letters = "123456789";
    let randomText = "";

    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomText += letters.charAt(randomIndex)
    }

    return `${randomText}`;
}

    function update() {
        const randomText = generateRandomLetters();
        randomLettersContainer.textContent = randomText;
        setTimeout(update, 350);
    }
    update();



//EFFETTO TITOLI 
  document.addEventListener("DOMContentLoaded", () => {
    const splitTypes = document.querySelectorAll('h2')
    splitTypes.forEach((char, i) => {
        const result = Splitting({ target: char, by: 'chars'})
        const text = result[0].chars;
        console.log(text)
  
        gsap.from(text, {
            scrollTrigger: {
                trigger: char,
                start: 'top 90%',
                end: 'top 23%',
                scrub: true,
                markers: false,
            },
            opacity: 0.2,
            stagger: 0.1,
        })
    })
  
    function applyOpacity(opc) {
      gsap.from(opc, {
        opacity: 0.1,
        scrollTrigger: {
          scrub: true,
          trigger: opc,
          markers: false,
          start: "top 90%",
          end: "top 50%",
        }
      });
    }

    const texts = document.querySelectorAll('.work-info')
    const tags = document.querySelectorAll('.works-item-tags')
    const aboutMe = document.getElementById('aboutMe')
    const contacts = document.getElementsByClassName('contacts')
    const containerOpacity = [...texts, ...tags, aboutMe, contacts]

    containerOpacity.forEach((opc) => applyOpacity(opc))
})


//3d Caricamento
document.querySelector('#button-load').addEventListener('click',
() => document.querySelector('#lazy-load').dismissPoster());

document.querySelector('#button-load2').addEventListener('click',
() => document.querySelector('#lazy-load2').dismissPoster());


//GRANA
var options = {
  animate: true,
  patternWidth: 140,
  patternHeight: 140,
  grainOpacity: 0.063,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1
};
grained('#idContainer', options)
grained('#top', options)


//sticky hero
const hero = document.querySelector('.hero');
  gsap.to(hero, {
    duration: 1,
    scale: 0.4,
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom -20%',
      scrub: 2,
      toggleActions: 'restart none none none',
      pin: hero,
      pinSpacing: true,
      markers: false
    }
  });

//STICKY BUTTONS
if(window.innerWidth > 768){
  const worksMenu = document.querySelector('.works-menu');
  gsap.to(worksMenu, {
    scrollTrigger: {
      trigger: worksMenu,
      start: '10% 0%',
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      scrub: true,
      toggleActions: 'restart none none none',
      pin: worksMenu,
      pinSpacing: false,
      markers: false
    }
  });
}