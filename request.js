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
  const result = data.map((element) => {
    picture.src = element.image;
    prodName.textContent = element.name;
    prodDescr.textContent = element.description;
  });
}
