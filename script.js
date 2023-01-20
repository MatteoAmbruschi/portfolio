const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function() {
    console.log('prova clic pulsante')
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


/*window.addEventListener('scroll', function() {
    let posY = window.scrollY;

    if(posY > 500) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
}); */


const LogoUp = document.getElementById('LogoUp');

LogoUp.addEventListener('click', function() {
    console.log('prova clic pulsante')
    window.scrollTo(0,0);
});


let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){

  let x = e.clientX;
  let y = e.clientY;

  outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
  cursor.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
});

links.forEach((link) => {
  link.addEventListener("mouseover", function() {
    outline.classList.add('hover');
    cursor.classList.add('hover');
  });
  
  link.addEventListener("mouseleave", function() {
    outline.classList.remove('hover');
    cursor.classList.remove('hover');
  });
});