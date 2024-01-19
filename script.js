const topo    = document.querySelector('.nav-links');
const burguer = document.querySelector('.burguer');
const linha1  = document.querySelector('#linha1');
const linha2  = document.querySelector('#linha2');
const linha3 = document.querySelector('#linha3');

burguer.addEventListener('click',()=>{
    topo.classList.toggle('nav-active');
    linha1.classList.toggle('linha1-active');
    linha2.classList.toggle('linha2-active');
    linha3.classList.toggle('linha3-active');
})

       