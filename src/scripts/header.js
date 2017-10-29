import { setHeight } from './header/setHeight';

document.addEventListener('DOMContentLoaded', () => {
  setHeight();
});

window.addEventListener('resize', () => {
  setHeight();
});
