document.querySelectorAll('.drop-zone').forEach(z=>{
z.addEventListener('dragover',e=>{e.preventDefault();z.style.background='rgba(255,255,255,0.2)'});
z.addEventListener('dragleave',()=>z.style.background='');
z.addEventListener('drop',e=>{
e.preventDefault();
z.style.background='';
const f=e.dataTransfer.files[0];
if(f&&f.type.startsWith('image/')){
const r=new FileReader();
r.onload=ev=>{const img=document.createElement('img');img.src=ev.target.result;img.style.width='100%';z.appendChild(img)};
r.readAsDataURL(f);
}
});
});