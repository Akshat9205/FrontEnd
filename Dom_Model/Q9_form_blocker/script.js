const form9 = document.getElementById('form');
const msg = document.getElementById('msg');

function validateField(field){
  const name = field.name;
  const err = field.parentElement.querySelector('.err');
  err.textContent = '';
  if(name==='name' && field.value.trim()==='') err.textContent='Name required';
  if(name==='email'){
    if(!field.value.includes('@')) err.textContent='Email must contain @';
    if(field.value.trim()==='') err.textContent='Email required';
  }
  if(name==='password' && field.value.length<6) err.textContent='Min 6 chars';
  return err.textContent==='';
}

form9.addEventListener('input', (e)=>{
  if(e.target.tagName.toLowerCase()==='input'){
    validateField(e.target);
  }
});

form9.addEventListener('submit', (e)=>{
  e.preventDefault();
  msg.textContent='';
  const fields = Array.from(form9.elements).filter(el=>el.tagName==='INPUT');
  let ok=true;
  fields.forEach(f=>{
    if(!validateField(f)) ok=false;
  });
  if(ok){
    msg.textContent='Form Submitted Successfully';
  }
});
