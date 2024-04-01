gsap.registerPlugin(ScrollTrigger)

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

let links = [...buttonlink, ...a, ...logoImg, backBtn];
const handleLinkHover = (event) => {
  outline.classList.toggle('hover', event.type === 'mouseover');
  cursor.classList.toggle('hover', event.type === 'mouseover');
};

links.forEach((link) => {
  link.addEventListener("mouseover", handleLinkHover);
  link.addEventListener("mouseleave", handleLinkHover);
});



//////GSAP
gsap.to(".hero", { opacity: 1, duration: 2.5,});
gsap.to(".hero-cta", { opacity: 1, duration: 1, y: 20, delay: 0.2,});


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
      const text = new SplitType(char, { types: 'chars'})

      gsap.from(text.chars, {
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


const titleBfl = document.getElementById('titleBfl')
if(window.innerWidth < 470){
  titleBfl.innerHTML = 'Business For<br> Lawyers'
}

const titleLarte = document.getElementById('titleLarte')
if(window.innerWidth < 400){
  titleLarte.innerHTML = "L'arte<br> D'annodare"
}
