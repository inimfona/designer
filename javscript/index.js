
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

let slidee = document.querySelector('.slidee');
setInterval(() => {
    let last = slidee.firstElementChild;
    last.remove();
    slidee.appendChild(last);
}, 1200);
