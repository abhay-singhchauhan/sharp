console.log('a');

console.log('b');

function c (){
   return new Promise((res,rej)=>{
    setTimeout(()=>{
       console.log("c");
       res();
    },3000)
   }) 
}
function d (){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("d");
            res();
         },0)
    }) 
 }
c().then((res)=>{
    d().then((res)=>{
        console.log('e');
    })
})



