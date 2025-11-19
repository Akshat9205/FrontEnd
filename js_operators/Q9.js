let arr=[];let res=[];
for(let i=1;i<=30;i++){arr.push(i);}
for(let n of arr){
    if(n%15===0)res.push("FizzBuzz");
    else if(n%2===0)res.push("Even");
    else res.push("Odd");
}
console.log(res);