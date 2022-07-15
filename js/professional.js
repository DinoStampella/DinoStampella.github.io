(function(){
    const professionals =[...document.querySelectorAll('.professional')];
    const buttonNext = document.querySelector('.arrow__right');
    const buttonBefore = document.querySelector('.arrow__left');
    

    slideProfessionalNext = ()=>{

        let currentProfessional = document.querySelector('.professional--show');

       for (let i = 0; i < professionals.length; i++) {
           if (professionals[i] === currentProfessional && professionals[i] !== professionals[professionals.length-1]){
            let newCurrentProfessional = professionals[i+1]
            

           professionals.forEach(prof =>{
            prof.classList.remove('professional--show')});
        
            newCurrentProfessional.classList.add('professional--show')

        } else if (professionals[i] === currentProfessional && professionals[i] === professionals[professionals.length-1]){
            let newCurrentProfessional = professionals[0]
            

           professionals.forEach(prof =>{
            prof.classList.remove('professional--show')});
        
            newCurrentProfessional.classList.add('professional--show')
        }
        }
    }

    buttonNext.addEventListener('click', slideProfessionalNext);
    

    slideProfessionalBefore = ()=>{

        let currentProfessional = document.querySelector('.professional--show');

       for (let i = 0; i < professionals.length; i++) {
           if (professionals[i] === currentProfessional && professionals[i] !== professionals[0]){
            let newCurrentProfessional = professionals[i-1]
            

           professionals.forEach(prof =>{
            prof.classList.remove('professional--show')});
        
            newCurrentProfessional.classList.add('professional--show')

        } else if (professionals[i] === currentProfessional && professionals[i] === professionals[0]){
            let newCurrentProfessional = professionals[professionals.length-1]
            

           professionals.forEach(prof =>{
            prof.classList.remove('professional--show')});
        
            newCurrentProfessional.classList.add('professional--show')
        }
        }
    }

    buttonBefore.addEventListener('click', slideProfessionalBefore);
}())