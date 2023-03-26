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

////////// Variante ma piu scattosa

/* const idbtn = document.getElementsByClassName('prova');
for (let i = 0; i < idbtn.length; i++) {
  window.addEventListener('scroll', function(){
    let btny = window.scrollY;

    if(btny < 400){
      idbtn[i].style.fontSize = '16px';
    } else if(btny < 600){
      idbtn[i].style.fontSize = '14px';
    } else {
      idbtn[i].style.fontSize = '12px';
    }
  });
} */
/////////////

const idbtn = document.getElementById('idbtn')
window.addEventListener('scroll', function(){
let btny = window.scrollY;

if(btny < 400){
  idbtn.style.fontSize = '16px'
} else if(btny < 600){
  idbtn.style.fontSize = '14px'
} else{
  idbtn.style.fontSize = '12px'
}
}); 

const idbtn1 = document.getElementById('idbtn1')
window.addEventListener('scroll', function(){
let btny1 = window.scrollY;

if(btny1 < 400){
  idbtn1.style.fontSize = '16px'
} else if(btny1 < 600){
  idbtn1.style.fontSize = '14px'
} else{
  idbtn1.style.fontSize = '12px'
}
}); 

const idbtn2 = document.getElementById('idbtn2')
window.addEventListener('scroll', function(){
let btny2 = window.scrollY;

if(btny2 < 400){
  idbtn2.style.fontSize = '16px'
} else if(btny2 < 600){
  idbtn2.style.fontSize = '14px'
} else{
  idbtn2.style.fontSize = '12px'
}
}); 

//////////////////////////


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





const myButton = document.querySelector('#myButton');

myButton.addEventListener('click', () => {
  window.location.replace('cookie.html');
});