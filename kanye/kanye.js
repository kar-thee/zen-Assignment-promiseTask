function main() {
  fetch("https://api.kanye.rest/")
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
  
  <div class="card-body">
    <h5 class="card-title">Kanye Quotes</h5>
    <p class="card-text">
      ${data.quote}
    </p>
    
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
