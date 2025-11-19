let fb="Great product! Fast delivery and amazing sound quality!";
let words=fb.split(" ").length;
let neg=fb.toLowerCase().includes("bad")||fb.toLowerCase().includes("poor");
console.log(neg?"Needs Improvement":"Positive Feedback",words);