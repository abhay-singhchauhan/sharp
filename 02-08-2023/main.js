//Axios Globals
axios.defaults.headers.common["X-Auth-Token"] = "somthing";
// GET REQUEST
function getTodos() {
  axios("https://jsonplaceholder.typicode.com/posts").then((res)=>{
    showOutput(res)
  })
  console.log('GET Request');
}

// POST REQUEST
function addTodo() {
  axios.post("https://jsonplaceholder.typicode.com/posts", {
    title:"How are you",
    body:"hi its abhay here, take my good wishes"
  }).then((res)=>{
    showOutput(res)
  })
}

// PUT/PATCH REQUEST
function updateTodo() {
    axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
      title: "dfgh fgdfg dfsgsdfgdfs dfsgbsdg ",
      body: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
  }).then((res)=>{
    showOutput(res)
  })
}

// DELETE REQUEST
function removeTodo() {
  axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
    showOutput(res)
  })
  console.log('DELETE Request');
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([axios("https://jsonplaceholder.typicode.com/posts"), 
  axios("https://jsonplaceholder.typicode.com/todos")])
  .then(axios.spread((first, second)=>{
    showOutput(second)
  }))
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  axios.post("https://jsonplaceholder.typicode.com/posts", {
    title:"How are you",
    body:"hi its abhay here, take my good wishes"
  }, {
    headers:{
      "Content-Type": "application/json",
      Authorization:"somthing"
    }
  }).then((res)=>{
    showOutput(res)
  })
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
axios({
  method: "post",
  url: 'https://jsonplaceholder.typicode.com/posts',
  data:{
    title:"abhay",
    body:"its abhay here"
  },
  transformResponse: axios.defaults.transformResponse.concat(data =>{
    data.title = data.title.toUpperCase();
    return data;
  })
}
).then((res)=>{
  showOutput(res)
})
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  axios("https://jsonplaceholder.typicode.com/postss").then((res)=>{
    showOutput(res)
  }).catch((err)=>{
    if(err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers)
    }
  })

}

// CANCEL TOKEN
function cancelToken() {
  let source = axios.CancelToken.source();

  axios("https://jsonplaceholder.typicode.com/posts").then((res)=>{
    showOutput(res)
  }).catch((err)=>{
    if(axios.isCancel(err)){
      console.log("Request Canceled", err.message)
    }
  });
  if(true){
    source.cancel("Its been canceled");
  }
  
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use((config)=>{
  console.log(`${config.method} request sent to ${config.url} at ${new Date().getTime()}`)
  return config;
})
// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
