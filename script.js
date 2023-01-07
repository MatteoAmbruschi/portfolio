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