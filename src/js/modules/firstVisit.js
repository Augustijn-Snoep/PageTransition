const firstVisit = () => {
    // If Body contains 'page--home' fire this function ->>
    const bodyWrapper = document.querySelector('body');

    // This function removes the pageloader when you switch from page
    if (bodyWrapper.classList.contains('page--home') ) {
        if (sessionStorage.getItem('first') === null){

            const firstLoad = document.querySelector('.page--home__transition')
            setTimeout(function() {
                firstLoad.classList.add('page--home__transition--remove')
            }, 2000);

            setTimeout(function() {
                const firstLoad = document.querySelector('.page--home__transition--remove')
                firstLoad.parentNode.removeChild(firstLoad);
            },3000);

            sessionStorage.setItem('first','nope!');

        } else {
            const firstLoad = document.querySelector('.page--home__transition')
            firstLoad.parentNode.removeChild(firstLoad);
        }
    }
}

export default firstVisit;