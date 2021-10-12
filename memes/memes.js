function main() {
  let arr;
  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => (arr = data))
    .then((data) => {
      process(data.data.memes);
    })
    .catch((err) => {
      console.log(err);
    });

  // author,content,tags
  function process(data) {
    console.log(arr.data.memes, "arr");
    console.log(data);
    let content;
    data.map((data) => {
      content += `<div class="card mb-3">
    <div class="card-header text-capitalize">Memes</div>
    <img src=${data.url}  class="card-img-top" alt="meme">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
    </div>
  </div>`;
    });

    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
main();
