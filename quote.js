console.clear();
const getButton = document.querySelector("#getButton");

let x = fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");

let state;

x.then((response) => {
  return response.json();
}).then((data) => {
  state = data;
});

getButton.addEventListener("click", btnClick);

function btnClick() {
  x = fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");

  x.then((response) => {
    return response.json();
  }).then((data) => {
    state = data;
  });

  const author = document.querySelector("#author");
  const text = document.querySelector("#quotation");
  author.textContent = state.data[0].quoteAuthor;
  text.textContent = state.data[0].quoteText;
}
