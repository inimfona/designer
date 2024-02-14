
let burger =document.querySelector('.burger')
let remove =document.querySelector('.remove')
let colo = document.querySelector('.colo')

burger.addEventListener('click' ,nav)
function nav (){
    colo.classList.toggle('colo');   
    burger.style.display='none'
    remove.style.display='block'
}
remove.addEventListener('click',navx)
function navx(){
  burger.style.display='block'
  remove.style.display='none'
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
images = new Array;
images[0] = "./img/slide (1).png";
images[1] = "./img/slide (2).png";
images[2] = "./img/slide (3).png";
images[3] = "./img/slide (4).png";
images[4] = "./img/slide (5).png";
images[5] = "./img/slide (6).png";
images[6] = "./img/slide (7).png";
images[7] = "./img/slide (8).png";
images[8] = "./img/slide (9).png";
images[9] = "./img/slide (10).png";
images[10] = "./img/slide (11).png";



setInterval( function() {
    changeImage()
}, 1800);

x = 0;

function changeImage() {
    document.querySelector('.img-slide').src = images[x];

    if ( x < 10 ) {
        x += 1;
    } else if ( x = 11 ) {
        x = 0;
    }
}
images2 = new Array;
images2[0] = "./img/slide (1).png";
images2[1] = "./img/slide (2).png";
images2[2] = "./img/slide (3).png";
images2[3] = "./img/slide (4).png";
images2[4] = "./img/slide (5).png";
images2[5] = "./img/slide (6).png";
images2[6] = "./img/slide (7).png";
images2[7] = "./img/slide (8).png";
images2[8] = "./img/slide (9).png";
images2[9] = "./img/slide (10).png";
images2[10] = "./img/slide (11).png";



setInterval( function() {
    changeImage2()
}, 2000);

x = 0;

function changeImage2() {
    document.querySelector('.img-slide2').src = images2[x];

    if ( x < 10 ) {
        x += 1;
    } else if ( x = 11 ) {
        x = 0;
    }
}
images3 = new Array;
images3[0] = "./img/slide (1).png";
images3[1] = "./img/slide (2).png";
images3[2] = "./img/slide (3).png";
images3[3] = "./img/slide (4).png";
images3[4] = "./img/slide (5).png";
images3[5] = "./img/slide (6).png";
images3[6] = "./img/slide (7).png";
images3[7] = "./img/slide (8).png";
images3[8] = "./img/slide (9).png";
images3[9] = "./img/slide (10).png";
images3[10] = "./img/slide (11).png";



setInterval( function() {
    changeImage3()
}, 1900);

x = 0;

function changeImage3() {
    document.querySelector('.img-slide3').src = images3[x];

    if ( x < 10 ) {
        x += 1;
    } else if ( x = 11 ) {
        x = 0;
    }
}
