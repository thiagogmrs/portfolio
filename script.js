//hamburguer
const btn = document.querySelector('.hamburguer');
const ativar = document.querySelector('.nav');
let trocarCor = document.querySelector('.line1');
let trocarCor2 = document.querySelector('.line2');

btn.addEventListener('click', ()=>{
    ativar.classList.toggle('ativar');
    trocarCor.classList.toggle('changeColor');
    trocarCor2.classList.toggle('changeColor');

});

//back-to-top

// const backToTop = document.getElementById('back-to-top');
// backToTop.addEventListener('click', function(){
//     window.scrollTo(0,0);
// });




