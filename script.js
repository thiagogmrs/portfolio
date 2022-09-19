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


document.querySelector('#qtde-pages').addEventListener('change', updateValue)
document.querySelector('#js').addEventListener('change', updateValue)
document.querySelector('#layout-sim').addEventListener('change', updateValue)
document.querySelector('#layout-nao').addEventListener('change', updateValue)
document.querySelector('#prazo').addEventListener('change', ()=> {
     const prazo = document.querySelector('#prazo').value
     document.querySelector('label[for=prazo]').innerHTML = `Prazo ${prazo} Semanas`
     updateValue()
});

function updateValue(){
    const qtdePages = document.querySelector('#qtde-pages').value
    const needJS = document.querySelector('#js').checked
    const needLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value
    let price = qtdePages * 100
    if(needJS){
        price = price + (price * 50/100)
    }
    if(needLayout){
        price = price + 500
    }
    let urgencyRate = 1 - prazo*0.1;
    price *= 1 + urgencyRate


    document.querySelector('#preco').innerHTML = `R$ ${price.toFixed(2)}`
}




//back-to-top

// const backToTop = document.getElementById('back-to-top');
// backToTop.addEventListener('click', function(){
//     window.scrollTo(0,0);
// });




