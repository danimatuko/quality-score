let prodAmountBtnGroup = document.querySelectorAll('.product-amount button');
prodAmountBtnGroup = Array.from(prodAmountBtnGroup);

let planBtnGroup = document.querySelectorAll('.plan button');
planBtnGroup = Array.from(planBtnGroup);

const checkbox = document.getElementById('agree');

const ctaBtn = document.querySelector('.cta');

const products = [
  {
    id: 1,
    retailPrice: 58.0,
    price: 39.95,
    subPrice: 35.95,
    link: 'www.tracker.com/link-1',
    sublink: 'www.tracker.com/subscribe-link-1',
  },
  {
    id: 3,
    retailPrice: 174.0,
    price: 102.0,
    subPrice: 91.8,
    link: 'www.tracker.com/link-3',
    sublink: 'www.tracker.com/subscribe-link-3',
  },
  {
    id: 6,
    retailPrice: 384.0,
    price: 186.0,
    subPrice: 167.0,
    link: 'www.tracker.com/link-6',
    sublink: 'www.tracker.com/subscribe-link-6',
  },
];

function onBtnGrupClick(btnGroup, e) {
  const id = e.target.textContent;
  e.target.parentNode.classList.contains('product-amount')
    ? updatePrices(+id)
    : showTerms(btnGroup);

  for (let btn of btnGroup) {
    btn.classList.remove('selected');
  }
  e.target.classList = 'selected';
}

function updatePrices(id) {
  const prod = products.find((prod) => prod.id === id);
  // prettier-ignore
  document.querySelector('.price').textContent =`$${prod.price}`;
  // prettier-ignore
  document.querySelector('.retail-price span').textContent = `$${prod.retailPrice}`;
  // prettier-ignore
  document.querySelector('.instant-savings span').textContent =`$${(prod.retailPrice - prod.subPrice).toFixed(2)}`;
}

function showTerms(btnGroup) {
  const terms = document.querySelector('.terms');

  setTimeout(() => {
    btnGroup[1].classList.contains('selected')
      ? (terms.style.display = 'block')
      : (terms.style.display = 'none');
  }, 150);
}

checkbox.addEventListener('change', () => {
  checkbox.checked
    ? ctaBtn.removeAttribute('disabled')
    : ctaBtn.setAttribute('disabled', 'true');
});

function init() {
  for (let btn of prodAmountBtnGroup) {
    btn.addEventListener('click', (e) => onBtnGrupClick(prodAmountBtnGroup, e));
  }

  for (let btn of planBtnGroup) {
    btn.addEventListener('click', (e) => onBtnGrupClick(planBtnGroup, e));
  }
}

init();
