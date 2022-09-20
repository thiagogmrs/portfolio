const btn = document.querySelector('#label-check');
const contain = document.querySelector('.contain-menu');
btn.addEventListener('click', ()=>{
  contain.classList.toggle('on-menu');
  document.getElementById('nav').classList.toggle('ativar')
  
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




