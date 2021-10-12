function main() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      process(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // author,content,tags
  let content;
  function process(data) {
    console.log(data);
    content += `<div class="card mb-3 ">
  <div class="card-header text-capitalize">Free Advice</div>
  <div class="card-body">
    
    <p class="card-text">
    ${data.slip.advice}
    </p>
    
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
