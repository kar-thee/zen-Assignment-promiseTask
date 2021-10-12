let arr = [
  {
    status: 100,
    name: "continue",
    url: "https://vadivelu.anoram.com/gif/100",
  },
  {
    status: 101,
    name: "Switching Protocols",
    url: "https://vadivelu.anoram.com/gif/101",
  },
  {
    status: 200,
    name: "OK",
    url: "https://vadivelu.anoram.com/gif/200",
  },
  {
    status: 201,
    name: "Created",
    url: "https://vadivelu.anoram.com/gif/201",
  },
  {
    status: 206,
    name: "Partial Content",
    url: "https://vadivelu.anoram.com/gif/206",
  },
  {
    status: 301,
    name: "Moved Permanently",
    url: "https://vadivelu.anoram.com/gif/301",
  },
  {
    status: 302,
    name: "Found",
    url: "https://vadivelu.anoram.com/gif/302",
  },
  {
    status: 307,
    name: "Temporary Redirect",
    url: "https://vadivelu.anoram.com/gif/307",
  },
  {
    status: 400,
    name: "Bad Request",
    url: "https://vadivelu.anoram.com/gif/400",
  },
  {
    status: 401,
    name: "Unauthorized",
    url: "https://vadivelu.anoram.com/gif/401",
  },
  {
    status: 402,
    name: "Payment Required",
    url: "https://vadivelu.anoram.com/gif/402",
  },
  {
    status: 403,
    name: "Forbidden",
    url: "https://vadivelu.anoram.com/gif/403",
  },
  {
    status: 404,
    name: "Not Found",
    url: "https://vadivelu.anoram.com/gif/404",
  },
  {
    status: 405,
    name: "Method Not Allowed",
    url: "https://vadivelu.anoram.com/gif/405",
  },
  {
    status: 406,
    name: "Not Acceptable",
    url: "https://vadivelu.anoram.com/gif/406",
  },
  {
    status: 408,
    name: "Request Timeout",
    url: "https://vadivelu.anoram.com/gif/408",
  },
  {
    status: 409,
    name: "Conflict",
    url: "https://vadivelu.anoram.com/gif/409",
  },
  {
    status: 410,
    name: "Gone",
    url: "https://vadivelu.anoram.com/gif/410",
  },
  {
    status: 411,
    name: "Length Required",
    url: "https://vadivelu.anoram.com/gif/411",
  },
  {
    status: 412,
    name: "Precondition Failed",
    url: "https://vadivelu.anoram.com/gif/412",
  },
  {
    status: 417,
    name: "Expectation Failed",
    url: "https://vadivelu.anoram.com/gif/417",
  },
  {
    status: 421,
    name: "MisDirect Request",
    url: "https://vadivelu.anoram.com/gif/421",
  },
  {
    status: 422,
    name: "Unprocessable Entity",
    url: "https://vadivelu.anoram.com/gif/422",
  },
  {
    status: 423,
    name: "Locked",
    url: "https://vadivelu.anoram.com/gif/423",
  },
  {
    status: 424,
    name: "Failed Dependency",
    url: "https://vadivelu.anoram.com/gif/424",
  },
  {
    status: 499,
    name: "Client Closed Request",
    url: "https://vadivelu.anoram.com/gif/499",
  },
  {
    status: 500,
    name: "Internal Server Error",
    url: "https://vadivelu.anoram.com/gif/500",
  },
  {
    status: 502,
    name: "Bad Gateway",
    url: "https://vadivelu.anoram.com/gif/502",
  },
  {
    status: 506,
    name: "Variant Also Negotiates",
    url: "https://vadivelu.anoram.com/gif/506",
  },
  {
    status: 508,
    name: "Loop Detected",
    url: "https://vadivelu.anoram.com/gif/508",
  },
];
let content;
arr.map((data) => {
  content += `<div class="container-sm"><div class="card mb-3">
  <div class="card-header text-capitalize">Learn Status Code</div>
  <img src=${data.url} class="card-img-top" alt=${data.name}>
  <div class="card-body">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text">
  ${data.status} - ${data.name}
  </p>
  </div>
  </div>
  </div>`;
});

let root = document.getElementById("root");
root.innerHTML += content;
