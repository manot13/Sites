function initMenu(){
    const menuHide = document.querySelector('.menu-nav ul');
    const seta = document.querySelector('.menu p');

    function handleSeta(){
        menuHide.classList.toggle('ativo');
    }

    seta.addEventListener('click', handleSeta);
}
initMenu();

function initLinks(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function handleLink(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        return console.log(section);
    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click', handleLink);
    });
}
initLinks();

const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;

function animaScroll(){
    sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if(sectionTop<0){
            section.classList.add('ativo');
            //return console.log(section.getBoundingClientRect().top);
        }
    });
}

animaScroll();
window.addEventListener('scroll', animaScroll);