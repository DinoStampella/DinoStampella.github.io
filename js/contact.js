(function(){

    const images = ['./images/Contact - 1.jpg','./images/Contact - 2.jpg','./images/Contact - 3.jpg','./images/Contact - 4.jpg','./images/Contact - 5.jpg']

    const img1 = document.querySelector('.img1')
    const img2 = document.querySelector('.img2')

    const circles = document.querySelector('.circles')

    for (let index = 0; index < images.length; index++) {
        const div = document.createElement('div');
        div.classList.add('circle');
        div.id = index; 
        circles.appendChild(div)
    }

    let i = 1

    img1.src = images[0];
    const circleArray = document.querySelectorAll('.circle');
    circleArray[0].classList.add('circle--show');

    const slideShow = ()=>{
        
        img2.src = images[i];
        const currentCircle = Array.from(circleArray).find( el => el.id == i);
        Array.from(circleArray).forEach(cir => cir.classList.remove('circle--show'));
        currentCircle.classList.add('circle--show');
        img2.classList.add('active');
        i++
        if (i == images.length) {
            i = 0
        }

        setTimeout(() =>{
            img1.src = img2.src;
            img2.classList.remove('active');
        }, 2000)
    }

    setInterval(slideShow, 4000)
}())