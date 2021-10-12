function main() {
  fetch("https://biriyani.anoram.com/get")
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
  <div class="card-header text-capitalize">Biryani</div>
  <img src=${data.image} class="card-img-top" alt="biryani img">
  <div class="card-body">
  <p class="card-text">Biryani -Everyone's Favourite Food</p>
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
