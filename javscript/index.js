
let hamburger =document.querySelector('.hamburger')
let colo = document.querySelector('.colo')

hamburger.addEventListener('click' ,nav)
function nav (){
   
    colo.classList.toggle('colo');

    
}
let colos1 = document.querySelector('.colos1')
let content1 = document.querySelector('.content1')
colos1.addEventListener('mouseover',dope)
function dope(){
  colos1.style.display='none';
  content1.innerHTML='<p>We our very concious in deliverring our services on time not ot keep our customers waiting</p>'
}
content1.addEventListener('mouseout',unchanged)
function unchanged(){
  colos1.style.display='block';
  content1.innerHTML='';
}
let colos2 = document.querySelector('.colos2')
let content2 = document.querySelector('.content2')
colos2.addEventListener('mouseover',dope2)
function dope2(){
  colos2.style.display='none';
  content2.innerHTML='<p>We our very concious in deliverring our services on time not ot keep our customers waiting</p>'
}
content2.addEventListener('mouseout',unchanged2)
function unchanged2(){
  colos2.style.display='block';
  content2.innerHTML='';
}
let colos3 = document.querySelector('.colos3')
let content3 = document.querySelector('.content3')
colos3.addEventListener('mouseover',dope3)
function dope3(){
  colos3.style.display='none';
  content3.innerHTML='<p>We our very concious in deliverring our services on time not ot keep our customers waiting</p>'
}
content3.addEventListener('mouseout',unchanged3)
function unchanged3(){
  colos3.style.display='block';
  content3.innerHTML='';
}
let colos4 = document.querySelector('.colos4')
let content4 = document.querySelector('.content4')
colos4.addEventListener('mouseover',dope4)
function dope4(){
  colos4.style.display='none';
  content4.innerHTML='<p>We our very concious in deliverring our services on time not ot keep our customers waiting</p>'
}
content4.addEventListener('mouseout',unchanged4)
function unchanged4(){
  colos4.style.display='block';
  content4.innerHTML='';
}

