function main() {
  fetch(
    "https://passwordinator.herokuapp.com/generate/?num=true&char=true&caps=true&len=14"
  )
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
    <div class="card-header text-capitalize">Password Generator</div>
    <div class="card-body">
      <h5 class="card-title">Secure Password created</h5>
      <p class="card-text">
        ${data.data}
      </p>
    </div>
  </div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
