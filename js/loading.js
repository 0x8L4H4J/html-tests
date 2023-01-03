const animationElement = document.querySelector('.loading-animation');

animationElement.addEventListener('animationend', () => {
    animationElement.innerHTML = '';
});