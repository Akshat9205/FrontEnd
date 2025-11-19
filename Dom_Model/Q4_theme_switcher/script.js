const buttons = document.querySelectorAll('button');
buttons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const theme = btn.getAttribute('data-theme');
    // apply using setAttribute as required
    document.body.setAttribute('data-theme', theme);
  });
});
// initialize default
if(!document.body.hasAttribute('data-theme')){
  document.body.setAttribute('data-theme','light');
}
