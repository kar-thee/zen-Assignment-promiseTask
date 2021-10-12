function main() {
  fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")
    .then((response) => response.json())
    .then((data) => {
      process(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // author,content,tags
  function process(data) {
    console.log(data);
    let content = `<div class="card mb-3 ">
  <div class="card-header text-capitalize">Game Of Thrones</div>
  <div class="card-body">
    <h5 class="card-title">${data.character.name}</h5>
    <p class="card-text">
    ${data.sentence}
    </p>
    <h6>${data.character.house.name}</h6>
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
    let tagsd = document.querySelector(".card-header");
    tagsd.innerHTML = data.tags;
  }
}
setInterval(main, 2500);
