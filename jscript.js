var kepek = document.querySelector('.aktualis');

var kepeim = ['kepek/_DSC7025.jpg', 'kepek/_DSC7365.jpg', 'kepek/_DSC7371_1.jpg', 'kepek/_DSC7444.jpg', 'kepek/_DSC7515.jpg'];

var i = 0;

function balra(){
    if(i<=0) i = kepeim.length;
    i--;
    return setImg();
}

function jobbra(){
    if(i >= kepeim.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return kepek.setAttribute('src',kepeim[i]);
}