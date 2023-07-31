
let t = document.querySelector("tbody");
let data = JSON.parse(localStorage.getItem("userInfo")) || [];
let div = document.getElementById("input");
let but = document.querySelector("form");
let va = document.getElementById("va");
let de = document.getElementById("de");
let ca = document.getElementById("ca");

va.value = "hi";
div.addEventListener("submit", (element)=>{
    element.preventDefault()
    if(va.value !== "" && va.value !== "" && ca.value !== "" ) {
        data.push({
            value: va.value,
            description:de.value,
            category:ca.value
  })
  
  localStorage.setItem("userInfo", JSON.stringify(data))
  display(data) 
  div.style.display = "none";
  let hheight = document.body.scrollHeight;
  window.scrollTo(0,hheight)
    }else{
        alert("Please add all the values")
    }
 
})

t.addEventListener("click", edDe);
display(data);


function edDe(ele){
console.log(ele.target.classList.contains("edit"))

if(ele.target.classList.contains("delete")){
    if(confirm("Are you sure ?")){
    let arr = []
    data.forEach((element, i)=>{
       if(ele.target.parentElement.rowIndex - 1  !== i){
          arr.push(element)
       }
    })
    data = arr;
    localStorage.setItem("userInfo", JSON.stringify(data))
    display(data)}
}else if(ele.target.classList.contains("edit")){

let arr = []
    data.forEach((element, i)=>{
   if(ele.target.parentElement.rowIndex - 1  !== i){
      arr.push(element)
   }else{
    div.style.display = "flex";
    va.value = element.value;
    de.value = element.description;
    ca.value = element.category
   }
})
data = arr;
localStorage.setItem("userInfo", JSON.stringify(data))
display(data);
window.scrollTo(0,0)
}
}
function display(datas){
    let main = "";
datas.forEach((element, ind)=>{
            let str = `<tr>
            <td>${element.value}</td>
            <td>${element.description}</td>
            <td>${element.category}</td>
            <td class="ho edit">Edit</td>
            <td class="ho delete">Delete</td>
        </tr>`;
        main+=str;
})
t.innerHTML = main;
}