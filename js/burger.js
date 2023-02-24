window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('is-active');
    document.querySelector('#burger').classList.toggle('is-active');
    document.querySelector('#main-container').classList.toggle('main-container');
  });
});


// let burger = document.querySelector('#burger')



// // ---- ---- Open Input ---- ---- //
// document.querySelector('#burger').addEventListener('click', () => {
//   document.querySelector('#main-container').classList.add('main-container_op');
// });
// document.querySelector('#burger').addEventListener('click', () => {
//   document.querySelector('#main-container').classList.add('main-container_cl');
// });
// // ---- ---- Close Input ---- ---- //
// // closeIcon.addEventListener('click', () => {
// //   inputBox.classList.remove('open');
// //   openHeader.classList.remove('open');
// // });

