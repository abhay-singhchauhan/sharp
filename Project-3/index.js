let form = document.querySelector("form");
let price = document.getElementById("price");
let dname = document.getElementById("dish");
let tab = document.getElementById("table");
let table = document.querySelectorAll("table");

table[0].addEventListener("click",(ee)=>{
if(ee.target.classList.contains("del")) {
    if(confirm("Are you sure, you wanna delete this entry!!")){
       let retData = JSON.parse(localStorage.getItem("1"));
       let a = ee.target.parentElement.rowIndex;
       axios.delete(`https://crudcrud.com/api/d9e8ba3d72b045109cfc9a0f1787d57e/1/${retData[a-1]._id}`).then((res)=>{
        display()
       })
    }
}
})
table[1].addEventListener("click",(ee)=>{
    if(ee.target.classList.contains("del")) {
        if(confirm("Are you sure, you wanna delete this entry!!")){
           let retData = JSON.parse(localStorage.getItem("2"));
           let a = ee.target.parentElement.rowIndex;
           axios.delete(`https://crudcrud.com/api/d9e8ba3d72b045109cfc9a0f1787d57e/2/${retData[a-1]._id}`).then((res)=>{
            display()
           })
        }
    }
    })


    table[2].addEventListener("click",(ee)=>{
        if(ee.target.classList.contains("del")) {
            if(confirm("Are you sure, you wanna delete this entry!!")){
               let retData = JSON.parse(localStorage.getItem("3"));
               let a = ee.target.parentElement.rowIndex;
               axios.delete(`https://crudcrud.com/api/d9e8ba3d72b045109cfc9a0f1787d57e/3/${retData[a-1]._id}`).then((res)=>{
                display()
               })
            }
        }
        })
let datas;


display();
form.addEventListener("submit", apiCall);
function apiCall(element){
    element.preventDefault()
  if(price.value != "" || dname.value != "" || tab.value != ""){
     let obj = {
        dishname:dname.value,
        price: price.value,
        tab:tab.value
     }

     axios.post(`https://crudcrud.com/api/d9e8ba3d72b045109cfc9a0f1787d57e/${tab.value}`,obj).then((res)=>{
          display();
     })
  }else{
    alert("Please fill All the details")
  }
}

function display(){
    let body = document.querySelectorAll(".tbody");
    for(let i = 1 ; i <=3; i++) {
        let storeData = [];
        axios.get(`https://crudcrud.com/api/d9e8ba3d72b045109cfc9a0f1787d57e/${i}`).then((res)=>{
         let str = "";
        res.data.forEach((ele, i)=>{
            str += `<tr>
            <td>${ele.price}</td>
            <td>${ele.dishname}</td>
            <td class="del">Delete</td>
        </tr>`
        storeData.push(ele)
        })
        localStorage.setItem(`${i}`, JSON.stringify(storeData))
        body[i-1].innerHTML = str;
    })
    }
  
}