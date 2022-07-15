(function(){

    const menu = document.querySelector('.menu');
    const exit = document.querySelector('.exit');
    const links = document.querySelector('.nav__list');

    menu.addEventListener('click', showList);
    exit.addEventListener('click', hideList);

    function showList() {
        links.classList.add('nav__list--show');
    }

    function hideList() {
        setTimeout(() =>{
            links.classList.remove('nav__list--show');
        },500)
    }
}())