let name=" wireless headphones PRO ";
name=name.trim().toLowerCase().split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
name=name.replace("Pro","Pro Edition");
console.log(name,name.length);