var logo = document.getElementsByClassName('fa-dyalog')
var headContainer = document.getElementById('header-container');
var header = document.getElementById('header');
var links = document.getElementById('links');
var cancel = document.getElementsByClassName('fa-times')

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