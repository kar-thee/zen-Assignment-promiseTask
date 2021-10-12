function main() {
  fetch("https://icanhazdadjoke.com/slack")
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
    <h5 class="card-title">dadJokes</h5>
    <p class="card-text">
      ${data.attachments[0].text}
    </p>
    
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
}
setInterval(main, 2500);
