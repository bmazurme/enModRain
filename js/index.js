const currentYear = (new Date()).getFullYear();
const field = document.querySelector('.footer__copyright');

field.textContent = `© ${currentYear} bmazur`;