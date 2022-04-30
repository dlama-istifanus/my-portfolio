let logo = document.getElementsByClassName('fa-dyalog')
let headContainer = document.getElementById('header-container');
let header = document.getElementById('header');
let links = document.getElementById('links');
let firstSec = document.getElementById('first-section')

window.addEventListener('scroll', function(e){
    if(window.scrollY > 10){
        header.style.boxShadow = '0px 15px 20px -18px rgba(0,0,0,0.75)'
        header.style.position = 'fixed';
        firstSec.style.paddingTop = 0;
    }else{
        header.style.boxShadow = 'none';
        
    }
})

