document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.querySelector('.header');
  const headerHeight = headerElement.offsetHeight;
  const availableHeight = window.innerHeight - headerHeight;
  const containerElement = document.querySelector('.page-container');

  containerElement.style['min-height'] = `${availableHeight}px`;
});
