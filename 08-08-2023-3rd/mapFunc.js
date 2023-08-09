const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
  let result = 
console.log(array.map((e)=>{
 if(e === " ") {
    return 'empty string'
 }else {
    return e;
 }
}))