var shop = document.getElementById('shop'),
    close = document.getElementById('upgrade-close'),
    upgrades = document.querySelector('.upgrades');

shop.addEventListener('click', function(){
    upgrades.style.transform = 'translateY(0%)';
    
})
close.addEventListener('click', function(){
    upgrades.style.transform = 'translateY(100%)';

})
