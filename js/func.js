const body = document.getElementById('particles-js');

btn.addEventListener('click', function(){
    window.scrollTo(0,body.offsetHeight);
})

function opacity(){
    const activ = document.querySelectorAll('#elo');
    const scrollPos = window.screenY;
    if(scrollPos >= body.offsetTop)
    {
        for(let i=0; i<activ.length; i++){
        activ[i].classList.add('active');
        activ[i].style.transition = "2s linear";
        }
    }
}

window.addEventListener('scroll', opacity);
