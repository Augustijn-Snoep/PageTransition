const initCookie = () => {
    const cookieBanner = document.querySelector('.cookie');
    const cookieClose = document.querySelector('.cookie--close');

    if (sessionStorage.getItem('cookieSeen') != 'shown' ) {
      setTimeout(function() {
        cookieBanner.classList.add('cookie--is-visible');
        sessionStorage.setItem('cookieSeen', 'shown')
      }, 1000);
    }

    cookieClose.onclick = function() {
        cookieBanner.parentNode.removeChild(cookieBanner);
    }
}

initCookie();