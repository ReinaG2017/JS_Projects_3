const hotEmo = document.querySelector('.hot');
const wetEmo = document.querySelector('.wet');

//add event listner
hotEmo.addEventListener('click',() => {
    if (wetEmo.classList.contains('wet')) {
        wetEmo.classList.add('active');
        hotEmo.classList.remove('active');
    }
});

wetEmo.addEventListener('click',() => {
    if(hotEmo.classList.contains('hot')) {
        hotEmo.classList.add('active');
    wetEmo.classList.remove('active');
    }
});
