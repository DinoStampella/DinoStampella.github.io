(function(){
    const today = new Date;
    let year = today.getFullYear();
    let month = today.getMonth() +1;
    let date = today.getDate();
        if (month < 10 && month > 0) { 
            month = '0'+month
        };
        if (date < 10 && date >0) {
            date = '0' + date
        };
    let now = year + '-' + month + '-' + date;

    const dateInput = document.getElementById('date');
   
    dateInput.setAttribute('min', now);
    
 
    const button = document.querySelector('.contact__button')
    const form = document.querySelector('.form__background')
    const close = document.querySelector('.form__close')

    function openForm(){
        form.classList.add('form__background--show')
    }
    function closeForm(){
        form.classList.remove('form__background--show')
    }
    button.addEventListener('click', openForm)
    close.addEventListener('click', closeForm)
    
}())