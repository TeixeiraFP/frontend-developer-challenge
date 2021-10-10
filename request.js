function search() {
  const url =
    "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      card(data.products);
    });
}
search();

function card(data) {
  for (let value of data) {
    const article = document.createElement("article");
    article.setAttribute("class", "card");

    const html = `<section class="container-img">
      <img class="card-img" src="https:${value.image}" alt="img" />
    </section>
    <section class="container-content">
      <h4 class="title-card-content">${value.name}</h4>
      <p class="description-content invisible">${value.description}</p>
      <p class="old-price">De: R$${value.oldPrice}</p>
      <p class="price">Por: R$${value.price}</p>
      <p class="division-price">Ou: ${value.installments.count} de R$:${value.installments.value}</p>
      <button class="btn-card-content">Comprar</button>
    </section>
    `;
    article.innerHTML = html;
    document.querySelector(".container-card").appendChild(article);
  }
}
const btnMoreProd = document.querySelector("#btn-more");
btnMoreProd.addEventListener("click", (event) => {
  search();
});

// for (let product of data.products) {
//   const article = document.createElement('article');
//   article.setAttribute('class', 'card');
//   const html =
//   `<section class="card-image-container">
//       <img class="card-image" src="https:${product.image}" alt="Image">
//   </section>
//   <section class="card-content-container">
//       <h3>${product.name}</h3>
//       <p>${product.description}</p>
//       <p>De: R$${product.oldPrice}</p>
//       <p class="price">Por: R$${product.price}</p>
//       <p>ou ${product.installments.count}x de R$${product.installments.value}</p>
//       <button>Comprar</button>
//   </section>`;
//   article.innerHTML = html;
//   document.querySelector('.card-container').appendChild(article);
// }
// endpoint = 'https://' + data.nextPage;
// });
// }
