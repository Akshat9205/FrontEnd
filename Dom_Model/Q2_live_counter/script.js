const ta = document.getElementById('ta');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;

ta.addEventListener('keydown', (e)=>{
  const remaining = MAX - ta.value.length;
  if(remaining<=0 && e.key.length===1){ // printable char
    e.preventDefault();
  }
});

ta.addEventListener('input', updateCounter);

function updateCounter(){
  const remaining = MAX - ta.value.length;
  counter.textContent = `${remaining} characters left`;
  counter.classList.toggle('yellow', remaining<=20 && remaining>0);
  counter.classList.toggle('red', remaining<=0);
  // ensure no more than MAX characters
  if(ta.value.length>MAX) ta.value = ta.value.slice(0,MAX);
}

resetBtn.addEventListener('click', ()=>{
  ta.value='';
  updateCounter();
});

updateCounter();
