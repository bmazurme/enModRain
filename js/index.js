import { settings } from "./config/settings.js";

const currentYear = (new Date()).getFullYear();
const field = document.querySelector(settings.footerCopyright);
field.textContent = `© ${currentYear} ${settings.creater}`;