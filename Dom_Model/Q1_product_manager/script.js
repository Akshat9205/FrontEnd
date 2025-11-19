// Q1: Dynamic Product List Manager (Event Delegation)
const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('productList');

function createItem(name){
  const li = document.createElement('li');
  li.innerHTML = `<span class="label">${escapeHtml(name)}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  return li;
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

addBtn.addEventListener('click', ()=>{
  const val = input.value.trim();
  if(!val) return;
  list.appendChild(createItem(val));
  input.value='';
});

// Event delegation on parent UL
list.addEventListener('click', (e)=>{
  const li = e.target.closest('li');
  if(!li) return;
  if(e.target.matches('.delete')){
    li.remove();
  } else if(e.target.matches('.edit')){
    enterEditMode(li);
  }
});

// Auto-save when clicking outside an edited item
document.addEventListener('click', (e)=>{
  const editing = list.querySelector('.editing');
  if(!editing) return;
  if(!editing.contains(e.target)){
    saveEdit(editing);
  }
});

// Enter inline edit mode
function enterEditMode(li){
  if(li.classList.contains('editing')) return;
  li.classList.add('editing');
  const label = li.querySelector('.label');
  const text = label.textContent;
  label.style.display='none';
  const input = document.createElement('input');
  input.value = text;
  li.insertBefore(input, label);
  input.focus();

  // Save on Enter, cancel on Escape
  input.addEventListener('keydown', (ev)=>{
    if(ev.key==='Enter') saveEdit(li);
    if(ev.key==='Escape') cancelEdit(li);
  });
}

function saveEdit(li){
  const input = li.querySelector('input');
  if(!input) return;
  const newVal = input.value.trim();
  const label = li.querySelector('.label');
  label.textContent = newVal || 'Unnamed';
  input.remove();
  label.style.display='';
  li.classList.remove('editing');
}

function cancelEdit(li){
  const input = li.querySelector('input');
  if(!input) return;
  input.remove();
  li.querySelector('.label').style.display='';
  li.classList.remove('editing');
}
