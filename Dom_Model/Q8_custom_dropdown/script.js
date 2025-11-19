const toggle = document.getElementById('toggle');
const opts = document.getElementById('opts');

toggle.addEventListener('click', (e)=>{
  e.stopPropagation();
  opts.style.display = opts.style.display==='none' ? '' : 'none';
});

// clicking an option updates button
opts.addEventListener('click', (e)=>{
  if(e.target.classList.contains('opt')){
    toggle.textContent = e.target.textContent;
    opts.style.display='none';
  }
});

// use capturing phase to close dropdown on outside click
document.addEventListener('click', (e)=>{
  opts.style.display='none';
}, true);
