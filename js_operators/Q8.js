const cart=[{item:"Laptop",category:"electronics",price:45000},{item:"Shoes",category:"fashion",price:2500},{item:"Book",category:"education",price:600}];
let total=0;
for(let c of cart){
    let d=0;
    if(c.category==="electronics")d=0.1;
    if(c.category==="fashion")d=0.05;
    total+=c.price*(1-d);
}
if(total>50000)total*=0.95;
console.log(total);