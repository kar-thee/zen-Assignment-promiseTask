function main() {
  fetch("https://api.chucknorris.io/jokes/random")
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
<div class="card-header text-capitalize">Chuck Noris Jokes</div>
<div class="card-body">
  <h5 class="card-title"></h5>
  <img src=${data.icon_url} style="width:60px,height:60px class="card-img" alt="chuck noris jokes">
  <p class="card-text">
    ${data.value}
  </p>
  <a href="${data.url}" class="btn btn-primary">Visit ChuckNoris</a>
</div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
