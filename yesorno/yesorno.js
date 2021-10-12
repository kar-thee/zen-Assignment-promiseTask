function main() {
  fetch("https://yesno.wtf/api")
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
  <div class="card-header text-capitalize">Yes or No</div>
  <img src=${data.image} class="card-img-top" alt="yesorno">
  <div class="card-body">
    <h5 class="card-title">${data.answer}</h5>
    <p class="card-text">
      Answer : ${data.answer}
    </p>
    
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2000);
