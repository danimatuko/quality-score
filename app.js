import { products } from './data/products.js';

addEventListener('DOMContentLoaded', (event) => {
  let prodAmountBtnGroup = document.querySelectorAll('.product-amount button');
  let planBtnGroup = document.querySelectorAll('.plan button');
  const checkbox = document.getElementById('agree');
  const ctaBtn = document.querySelector('.cta');

  prodAmountBtnGroup = Array.from(prodAmountBtnGroup);
  planBtnGroup = Array.from(planBtnGroup);

  function onBtnGrupClick(btnGroup, e) {
    const id = e.target.textContent;
    e.target.parentNode.classList.contains('product-amount')
      ? updateData(+id)
      : showTerms(btnGroup);

    for (let btn of btnGroup) {
      btn.classList.remove('selected');
    }
    e.target.classList = 'selected';
  }

  function updateData(id) {
    const prod = products.find((prod) => prod.id === id);
    document.querySelector('.price').textContent = `$${prod.price}`;
    document.querySelector(
      '.retail-price span'
    ).textContent = `$${prod.retailPrice}`;
    ctaBtn.setAttribute('data-url', prod.sublink);
  }

  function showTerms(btnGroup) {
    const terms = document.querySelector('.terms');

    setTimeout(() => {
      btnGroup[1].classList.contains('selected')
        ? (terms.style.display = 'block')
        : (terms.style.display = 'none');
    }, 150);
  }

  function init() {
    checkbox.addEventListener('change', () => {
      checkbox.checked
        ? ctaBtn.removeAttribute('disabled')
        : ctaBtn.setAttribute('disabled', 'true');
    });

    ctaBtn.addEventListener('click', () => {
      location.href = ctaBtn.getAttribute('data-url');
    });
    for (let btn of prodAmountBtnGroup) {
      btn.addEventListener('click', (e) =>
        onBtnGrupClick(prodAmountBtnGroup, e)
      );
    }

    for (let btn of planBtnGroup) {
      btn.addEventListener('click', (e) => onBtnGrupClick(planBtnGroup, e));
    }
  }

  init();
});
