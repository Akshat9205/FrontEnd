const form = document.getElementById('form');
const steps = Array.from(document.querySelectorAll('.step'));
let idx = 0;
const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');
const submitBtn = document.getElementById('submit');
const summary = document.getElementById('summary');

function showStep(i){
  steps.forEach((s,si)=> s.style.display = si===i ? '' : 'none');
  backBtn.style.display = i===0 ? 'none' : '';
  nextBtn.style.display = i===steps.length-1 ? 'none' : '';
  submitBtn.style.display = i===steps.length-1 ? '' : 'none';
}
showStep(idx);

nextBtn.addEventListener('click', ()=>{
  const inputs = steps[idx].querySelectorAll('input');
  for(const inp of inputs){
    if(!inp.checkValidity()){
      inp.reportValidity();
      return;
    }
  }
  idx = Math.min(idx+1, steps.length-1);
  showStep(idx);
});

backBtn.addEventListener('click', ()=>{
  idx = Math.max(0, idx-1);
  showStep(idx);
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  // final validation
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if(!/.+@.+\..+/.test(email)){ alert('Email invalid'); return; }
  if(password.length<1){ alert('Password required'); return; }
  summary.textContent = `Summary: Name=${form.elements.name.value}, Email=${email}`;
});
