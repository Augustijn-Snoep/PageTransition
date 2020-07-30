const transition = () => {
    const navLinks = document.querySelectorAll('a');
    const overlay = document.querySelector('.transition');

    function transitionTitle() {
        const title = document.querySelector('.transition__title');
        title.classList.add('transition__title--is-showing');
    }

    function pageTransition() {
        overlay.classList.remove('shrink');
        overlay.classList.add('grow');
    }

    function transitionController(e) {
        e.preventDefault();
        pageTransition();
        const target = e.currentTarget;
        const changeURL = () => {
            console.log('animation ends'); 
            
            window.location = target.href;
            overlay.removeEventListener('animationend', changeURL);
        };
        
        overlay.addEventListener('animationend', changeURL);
    }

    document.addEventListener('DOMContentLoaded', () => {
        navLinks.forEach(link => {
            if (link.hostname !== window.location.hostname) return;

            link.addEventListener('click', transitionController);
        });
    });

    window.addEventListener('load', transitionTitle);
}

export default transition;