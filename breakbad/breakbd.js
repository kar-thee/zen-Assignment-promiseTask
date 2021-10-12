function main() {
  fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    .then((res) => res.json())
    .then((data) => {
      process(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // author,content,tags
  function process(data) {
    console.log(data);
    let content = `<div class="card mb-3 ">
  <div class="card-header text-capitalize">BreakingBad</div>
  <div class="card-body">
  <h5 class="card-title"> BreakingBadQuotes</h5>
    <p class="card-text">
    ${data[0].quote} - by ${data[0].author}
    </p>
    
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
