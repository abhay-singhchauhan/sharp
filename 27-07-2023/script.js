
  
    let n = document.getElementById("name");
    let e = document.getElementById("email");
    let num = document.getElementById("number");
    let sub = document.getElementById("submit");
    let form = document.querySelector("form");
    let t = document.querySelector("table");
    let data;
 
    form.addEventListener("submit", saveData);
    t.addEventListener("click", deleteData);
     
    axios.get("https://crudcrud.com/api/4b37104082534c75b8e9223831619985/appointment").then((res)=>{
      display(res.data)
      
  })
    
    function deleteData(em){
     
      if(em.target.classList.contains("delete")){
        if(confirm("Want to delete this element ?")){
            data.forEach((ele, i)=>{
          if((i+1) === em.target.parentElement.rowIndex){
            axios.delete(`https://crudcrud.com/api/4b37104082534c75b8e9223831619985/appointment/${ele._id}`).then((res)=>{
              axios.get(`https://crudcrud.com/api/4b37104082534c75b8e9223831619985/appointment`).then((res)=>{
               display(res.data);
            })
            })
          }
        })
        }
        
      }else if(em.target.classList.contains("edit")){
        
        data.forEach((ele, i)=>{
          let obj = {
            yes:true,
            id:ele._id
          }
          localStorage.setItem("edited", JSON.stringify(obj))
          if((i+1) === em.target.parentElement.rowIndex){
            n.value = ele.name;
            e.value = ele.email;
            num.value = ele.phone;
           
            em.target.parentElement.style.display = "none"
           
          }
        })
        
      }
    }



    function saveData(el) {
        el.preventDefault()
        let obj = {
            name:n.value,
            email:e.value,
            phone:num.value
        }
        let con = JSON.parse(localStorage.getItem("edited")) ;
        if(con.yes !== true){
          axios.post("https://crudcrud.com/api/4b37104082534c75b8e9223831619985/appointment",
          obj
      ).then((res)=>{
          axios.get("https://crudcrud.com/api/4b37104082534c75b8e9223831619985/appointment").then((res)=>{
              display(res.data)
              n.value = "";
              e.value = "";
              num.value = "";
          })
      })
        }else{
          axios.put(`https://crudcrud.com/api/4b37104082534c75b8e9223831619985/appointment/${con.id}`, {name:n.value,email:e.value,phone:num.value}).then((res)=>{
            console.log(res._id)
            axios.get(`https://crudcrud.com/api/4b37104082534c75b8e9223831619985/appointment`).then((res)=>{
              con.yes = false;
              localStorage.setItem("edited", JSON.stringify(con))
             display(res.data);
             n.value = "";
             e.value = "";
             num.value = "";
          })
          })
        }
       
    }
   
    function display(arr){
      data = arr;
        let str = ""
        str+=`<tr>
                <th>name</th>
                <th>email</th>
                <th>Phone</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>`
        for(let i = 0; i < arr.length; i++) {
            let st = `
             <tr>
                <td>${arr[i].name}</td>
                <td>${arr[i].email}</td>
                <td>${arr[i].phone}</td>
                <td class="delete">Delete</td>
                <td class="edit">edit</td>
             </tr>
            `;
            str+=st;
        }
    t.innerHTML = str;
    }