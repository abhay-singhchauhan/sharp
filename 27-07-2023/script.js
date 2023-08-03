  
    let n = document.getElementById("name");
    let e = document.getElementById("email");
    let num = document.getElementById("number");
    let sub = document.getElementById("submit");
    let form = document.querySelector("form");
    let t = document.querySelector("table");

    
    form.addEventListener("submit", saveData);
    t.addEventListener("click", deleteData);
     
     
    function deleteData(em){
     
      if(em.target.classList.contains("delete")){
        if(confirm("Want to delete this element ?")){
            let da = data.filter((ele, i)=>{
          if((i+1) !== em.target.parentElement.rowIndex){
            return true;
          }else {
            return false;
          }
        })
        data = da;
        localStorage.setItem("userData", JSON.stringify(data))
        display(data)
        }
        
      }else if(em.target.classList.contains("edit")){
        let da = data.filter((ele, i)=>{
          if((i+1) !== em.target.parentElement.rowIndex){
            return true;
          }else {
            n.value = ele.name;
            e.value = ele.email;
            num.value = ele.phone;
            return false;
          }
        })
        data = da;
        localStorage.setItem("userData", JSON.stringify(data))
        display(data)
      }
    }

    axios.get("https://crudcrud.com/api/4b8d9466293f43828420419b0a90325a/appointment").then((res)=>{
        display(res.data)
    })

    function saveData(el) {
        el.preventDefault()
        let obj = {
            name:n.value,
            email:e.value,
            phone:num.value
        }
        axios.post("https://crudcrud.com/api/4b8d9466293f43828420419b0a90325a/appointment",
            obj
        ).then((res)=>{
            axios.get("https://crudcrud.com/api/4b8d9466293f43828420419b0a90325a/appointment").then((res)=>{
                display(res.data)
            })
        })
    }
    function display(arr){
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