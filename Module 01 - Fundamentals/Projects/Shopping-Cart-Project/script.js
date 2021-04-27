/* const fetch = require('node-fetch'); */

// ------------------------------------------
const cartList = document.querySelector('.cart__items');
const cartPrice = document.querySelector('.total-price');

// criar a funcao de add a frase loading anste do API carregar
function createLoading() {
  const loading = document.createElement('h3');
  const main = document.querySelector('main');
  loading.className = 'loading';
  loading.innerHTML = 'loading...';
  main.appendChild(loading);
}

// criar a funcao de remover a frase loading depois da API carregar
function removeLoading() {
  const loading = document.querySelector('.loading');
  loading.remove();
}

function loadCartList() {
  cartList.innerHTML = localStorage.getItem('cartList');
  if (localStorage.getItem('cartPrice')) {
    cartPrice.innerHTML = parseFloat(localStorage.getItem('cartPrice'));
  }
}

function saveCartList() {
  localStorage.setItem('cartList', cartList.innerHTML);
  localStorage.setItem('cartPrice', cartPrice.innerHTML);
}

function toReal(number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

async function totalPrice(price, operator) {
  const accPrice = document.querySelector('.total-price');
  if (!operator) { accPrice.innerHTML = parseFloat(accPrice.innerHTML) - parseFloat(price); }
  if (operator) { accPrice.innerHTML = parseFloat(accPrice.innerHTML) + parseFloat(price); }
}

function removeCartElement(e) {
  (e.target).remove();
  saveCartList();
}

function addCart(e) {
  const id = e.target.parentNode.querySelector('span.item__sku').innerText;
  const price = e.target.parentNode.querySelector('span.item__price').innerText;
  const title = e.target.parentNode.querySelector('span.item__title').innerText;
  const li = document.createElement('li');

  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', removeCartElement);
  li.addEventListener('click', function () { totalPrice(price, false); });

  cartList.appendChild(li);
  totalPrice(price, true);
  saveCartList();
}

function createProductItemElement({ sku: id, name, image, price }) {
  const section = document.createElement('section');
  section.className = 'item';

  const createButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  createButton.addEventListener('click', addCart);

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price', price));
  section.appendChild(createCustomElement('span', 'item__preco', toReal(price)));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createButton);

  return section;
}

// ------- GET Data and Add market list --------

async function getData(QUERY) {
  createLoading();
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
}

async function addDataList(QUERY) {
  const productList = await getData(QUERY);
  const marketSection = document.querySelector('section.items');

  productList.forEach((product) => {
    const item = createProductItemElement({
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
      price: product.price,
    });

    marketSection.appendChild(item);
  });
  removeLoading();
}

function clearCart() {
  cartList.innerHTML = '';
  cartPrice.innerHTML = '';
  saveCartList();
}

// windows onload =
addDataList('computador');
loadCartList();
document.querySelector('.empty-cart').addEventListener('click', clearCart);
