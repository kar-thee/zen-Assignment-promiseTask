function main() {
  fetch("https://baconipsum.com/api/?type=meat-and-filler")
    .then((response) => response.json())
    .then((data) => {
      process(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  function process(data) {
    console.log(data);
    let content = `<div class="card mb-3">
  <div class="card-header text-capitalize">Data Fillers for Documents</div>
  <div class="card-body">
    <h4 class="card-title">${data[0]}</h4>
    <h5>${data[1]}</h5>
    <h6 class="card-text">
      ${data[2]}
    </h6>
    <p class="card-text">
      ${data[3]}
    </p>
    <small class="text-muted">${data[4]}</small>
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
