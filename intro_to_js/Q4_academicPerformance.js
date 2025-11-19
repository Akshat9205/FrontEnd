
let marks = [90, 88, 79, 92, 85];
if (marks.some(m => m < 35)) console.log("Detained");
else {
  let avg = marks.reduce((a,b)=>a+b,0)/marks.length;
  if (avg >= 85) console.log("Promoted with Distinction");
  else if (avg >= 50) console.log("Promoted");
  else console.log("Detained");
}
