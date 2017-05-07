//= include _variables.js

$(() => {
  //= include ../components/**/*.js

  function setMinHeight() {
    const heihgt = $(window).height() - $('header').outerHeight();
    $('.page-container').css({ 'min-height': heihgt });
  }

  setMinHeight();
});
