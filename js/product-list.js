const response = await fetch('api/products.json');
const products = await response.json();
renderProducts(products);

// fetch('api/products.json')
//   .then( response => response.json() )
//   .then( products => renderProducts(products) );

function renderProducts(products, rate = 1) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `<article class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h3 class="product-card__h3">${product.title}</h3>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__buttons">
            <button class="product-card__buttons-info button button-card">
                Info
            </button>
            <button class="product-card__buttons-buy button button-card">
                Buy - ${(product.price * rate).toFixed(2)}
            </button>
        </div>
    </article>`;
    }
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsHtml;
}

const currencySelector = document.querySelector('.products__currency');
currencySelector.addEventListener('change', changeCurrency);

let currencies;
async function changeCurrency() {
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const convertTo = currencySelector.value;
    const rate = currencies.rates[convertTo];
    renderProducts(products, rate);
}
