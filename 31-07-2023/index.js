let form = document.querySelector("form");
let v = document.getElementById("value");
let d = document.getElementById("desc");
let ca = document.getElementById("cate");
let data = JSON.parse(localStorage.getItem("userInfo")) || [];


form.addEventListener("submit", addData);
function addData(event){
    event.preventDefault()
    if(v.value === "" || d.value === "" || ca.value === "") {
        alert("Please add all the details")
    }else{
        let obj = {
            value: v.value,
            description:d.value,
            category:ca.value
        }
        data.push(obj)
        localStorage.setItem("userInfo", JSON.stringify(data));
       
    }
}

