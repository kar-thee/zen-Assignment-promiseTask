function main() {
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      process(data);
    })
    .catch((err) => {
      console.log(err);
    });
  let content;
  // author,content,tags
  function process(data) {
    console.log(data);
    content += `<div class="card mb-3 ">
  <div class="card-header text-capitalize">Activity Finder</div>
  <div class="card-body">
  <h5 class="card-title"> ${data.type}</h5>
    <p class="card-text">
    ${data.activity} 
    </p>
    
  </div>
</div>`;
    let root = document.getElementById("root");
    root.innerHTML += content;
  }
  return content;
}

// let time = Math.ceil(Math.random() * 11 + 2);
setInterval(main, 2500);
