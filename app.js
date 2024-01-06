let hamberger = document.querySelector('.container-hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let links= document.querySelector('.list');

console.log('coming');

hamberger.addEventListener('click',function(){
    console.log('coming');
        mobileNav.classList.add('open');
})
times.addEventListener('click',function(){
        mobileNav.classList.remove('open');
})
links.addEventListener('click',function(){
    mobileNav.classList.remove('open');
})


