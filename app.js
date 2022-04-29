let logo = document.getElementsByClassName('fa-dyalog')
let headContainer = document.getElementById('header-container');
let header = document.getElementById('header');
let links = document.getElementById('links');
let cancel = document.getElementsByClassName('fa-times');
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




logo[0].addEventListener('click', function(){
    links.style.display = 'block';
    headContainer.style.backgroundColor = '#ffff';
    logo[0].style.color = '#7149BC';
    header.style.marginLeft = '30px'
    cancel[0].style.display = 'block'
})

cancel[0].addEventListener('click', function(){
    links.style.display = 'none';
    headContainer.style.backgroundColor = '#7149BC';
    logo[0].style.color = '#ffff';
    header.style.marginLeft = '30px'
})