//hamburguer
const btn = document.querySelector('#label-check');
const contain = document.querySelector('.contain-menu');
btn.addEventListener('click', ()=>{
  contain.classList.toggle('on-menu');
  document.getElementById('nav').classList.toggle('ativar')
  
});


//button certificado
function showCertificado(){
  const menuCertificado = document.querySelector('.menu-certificado').classList.toggle('ativo');
  if(menuCertificado){
    document.querySelector('.btn-certificado').innerHTML = 'Fechar'
  }
  else{
    document.querySelector('.btn-certificado').innerHTML = 'Visualizar'
  }

}





//orçamento
document.querySelector('#qtde-pages').addEventListener('change', updateValue)
document.querySelector('#layout-sim').addEventListener('change', updateValue)
document.querySelector('#prazo').addEventListener('change', ()=> {
     const prazo = document.querySelector('#prazo').value
     document.querySelector('label[for=prazo]').innerHTML = `Prazo ${prazo} Semanas`
     updateValue()
});

function updateValue(){
    const qtdePages = document.querySelector('#qtde-pages').value
    const needLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value
    let price = qtdePages * 100
    if(needLayout){
        price = price + 500
    }
    let urgencyRate = 1 - prazo*0.1;  
    price *= 1 + urgencyRate


    document.querySelector('#preco').innerHTML = `R$ ${price.toFixed(2).replace('.', ',')}`
}




//back-to-top

// const backToTop = document.getElementById('back-to-top');
// backToTop.addEventListener('click', function(){
//     window.scrollTo(0,0);
// });




