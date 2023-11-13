const popupCookies = document.querySelector('div.cookiesPopupContainer');
const popupCookiesAccept = document.querySelector('#popupCookiesAccept');
const popupCookiesRefuse = document.querySelector('#popupCookiesRefuse');

popupCookiesAccept.addEventListener('click', (event) => {
    cookiesSubmit(true);
});
popupCookiesRefuse.addEventListener('click', (event) => {
    cookiesSubmit(false);
});

function openPopupCookies(instant) {
    popupCookies.removeAttribute('hidden');
    if (instant == true) return;

    popupCookies.setAttribute('showing', '');
    popupCookies.addEventListener('animationend', (event) => {
        popupCookies.removeAttribute('showing');
    }, { once: true });
}

function closePopupCookies(instant) {
    if (instant == true) {
        popupCookies.setAttribute('hidden', '');
        return;
    }

    popupCookies.setAttribute('hidding', '');
    popupCookies.addEventListener('animationend', (event) => {
        popupCookies.setAttribute('hidden', '');
        popupCookies.removeAttribute('hidding');
    }, { once: true });
}

function cookiesSubmit(accepted) {
    closePopupCookies();
    localStorage.setItem('cookiesAccepted', accepted);
}

function checkCookies() {
    if (localStorage.getItem('cookiesAccepted') === null) {
        openPopupCookies();
    } else {
        closePopupCookies(true);
    }
}
checkCookies();