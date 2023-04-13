
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-section__item').forEach((item, index) => {
    let question = item.querySelector('.faq-section__question')
    question.addEventListener('click', () => {
      item.classList.toggle('is-active');

      if (item.classList.contains('is-active')) {
        item.querySelector('.faq-section__item-btn').classList.add('open');
      } else {
        item.querySelector('.faq-section__item-btn').classList.remove('open');
      }
      removeOpen(index)

    });
  });
});

function removeOpen(index1) {
  document.querySelectorAll('.faq-section__item').forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('is-active');
      item2.querySelector('.faq-section__item-btn').classList.remove('open');
    }
  });
}
