function main() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      process(data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });

  // author,content,tags
  function process(data) {
    console.log(data);
    let content = `<div class="card mb-3">
  <div class="card-header text-capitalize">Quote for Living</div>
  <div class="card-body">
    <h5 class="card-title">${data.quoteText}</h5>
    <p class="card-text">
      Genre : ${data.quoteGenre}
    </p>
    <h6>By - ${data.quoteAuthor}</h6>
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
