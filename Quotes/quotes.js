function main() {
  fetch("https://api.quotable.io/random")
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
    let content = `<div class="card mb-3">
  <div class="card-header text-capitalize">QUOTES</div>
  <div class="card-body">
    <h5 class="card-title">${data.content}</h5>
    <p class="card-text">
    Tags : ${data.tags}
    </p>
    <h6>By - ${data.author}</h6>
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
