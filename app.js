/* 
1. According to the selected number of products (1/3/6) please use JS to update the data:
- Prices & Retail prices
- Links in the CTA button
2. 'Instant Savings' is calculated by the difference between the retail price and the price - please use JS to calculate.
3. On the “Subscribe & Save More” mode “BUY NOW” button should become disabled until “Yes! I want to Subscribe & Save” is checked by the user */

let prodAmountBtnGroup = document.querySelectorAll('.product-amount button');
prodAmountBtnGroup = Array.from(prodAmountBtnGroup);

let planBtnGroup = document.querySelectorAll('.plan button');
planBtnGroup = Array.from(planBtnGroup);

function onBtnGrupClick(btnGroup, e) {
  const id = e.target.textContent;
  e.target.parentNode.classList.contains('product-amount') && updatePrices(+id);

  for (let btn of btnGroup) {
    btn.classList.remove('selected');
  }
  e.target.classList = 'selected';
}

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

function updatePrices(id) {
  const prod = products.find((prod) => prod.id === id);
  // prettier-ignore
  document.querySelector('.price').textContent =`$${prod.price}`;
  // prettier-ignore
  document.querySelector('.retail-price span').textContent = `$${prod.retailPrice}`;
  // prettier-ignore
  document.querySelector('.instant-savings span').textContent =`$${(prod.retailPrice - prod.subPrice).toFixed(2)}`;
}

function init() {
  for (let btn of prodAmountBtnGroup) {
    btn.addEventListener('click', (e) => onBtnGrupClick(prodAmountBtnGroup, e));
  }

  for (let btn of planBtnGroup) {
    btn.addEventListener('click', (e) => onBtnGrupClick(planBtnGroup, e));
  }
}

init();
