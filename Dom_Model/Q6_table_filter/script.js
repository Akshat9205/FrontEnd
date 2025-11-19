const search = document.getElementById('search');
const tbl = document.getElementById('tbl');
const nores = document.getElementById('nores');

search.addEventListener('input', ()=>{
  const q = search.value.trim().toLowerCase();
  const rows = Array.from(tbl.tBodies[0].rows);
  let any=false;
  rows.forEach(r=>{
    const name = r.cells[0].textContent.toLowerCase();
    const branch = r.cells[1].textContent.toLowerCase();
    if(name.includes(q) || branch.includes(q)){
      r.style.display='';
      any=true;
    } else {
      r.style.display='none';
    }
  });
  nores.style.display = any ? 'none' : '';
});
