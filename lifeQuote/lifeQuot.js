function main() {
  fetch("https://quoteclear.web.app/api/random")
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
  <div class="card-header text-capitalize">Life QUOTES</div>
  <div class="card-body">
    <h5 class="card-title">${data.text}</h5>
    <p class="card-text">
    ${data.text}
    </p>
    <a href=${data.source}>Link</a>
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
