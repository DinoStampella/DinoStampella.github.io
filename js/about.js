(function(){
    const imgSlider = [...document.querySelectorAll('.about__img')];
    const click = document.getElementById('nosotros');
    let i = 0 
     
    
    slideFunction= ()=>{
        imgSlider.forEach(img => {
            img.classList.remove('about__img--show')
        });
        imgSlider[i].classList.add('about__img--show');
        i++;
        if (i === imgSlider.length) {
            i = 0
        }
        };
    
    setInterval(slideFunction, 4000)
}());