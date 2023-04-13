window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('is-active');
    document.querySelector('#burger').classList.toggle('is-active');
    document.querySelector('#main-container').classList.toggle('main-container');
  });
});


