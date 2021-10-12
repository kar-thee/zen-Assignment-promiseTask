function main() {
  fetch("https://random-words-api.vercel.app/word")
    .then((res) => res.json())
    .then((data) => {
      process(data[0]);
    })
    .catch((err) => {
      console.log(err);
    });

  // author,content,tags
  function process(data) {
    console.log(data);
    let content = `<div class="card mb-3">
  <div class="card-header text-capitalize">Dictionary</div>
  <div class="card-body">
    <h5 class="card-title">${data.word}</h5>
    <p class="card-text">
      Definition : ${data.definition}
    </p>
    <h6>pronunciation - ${data.pronunciation}</h6>
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
