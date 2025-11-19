const departments=[["HR",72],["Finance",88],["Tech",95],["Support",63]];
for(let d of departments){
    let s=d[1];
    if(s>=90)console.log("Excellent");
    else if(s>=75)console.log("Good");
    else if(s>=60)console.log("Average");
    else console.log("Needs Improvement");
}