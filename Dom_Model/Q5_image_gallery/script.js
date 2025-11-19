const imgs = document.querySelectorAll('.grid img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

imgs.forEach(img=>{
  img.addEventListener('click', (e)=>{
    modalImg.src = img.src.replace('/200','/800');
    modal.style.display='flex';
  });
});

modal.addEventListener('click', ()=>{
  modal.style.display='none';
});
// prevent closing when clicking inside modal-content
document.querySelector('.modal-content').addEventListener('click', (e)=>{
  e.stopPropagation();
});
