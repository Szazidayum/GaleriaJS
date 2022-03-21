/*window.addEventListener("load",init);


function ID(elem){
    ID("galeria").innerHTML = "<h1>Képeim</h1>";
    megjelenit();

}
var kepek = [
    {
        cim:"Első",
        leiras:"Kecskék",
        elereiut: "kepek/_DSC7025.jpg"
    },
    {
        cim:"Második",
        leiras:"Babarózsák",
        elereiut: "kepek/_DSC7365.jpg"
    },
    {
        cim:"Harmadik",
        leiras:"Tájkép 1",
        elereiut: "kepek/_DSC7371_1.jpg"
    },
    {
        cim:"Negyedik",
        leiras:"Tájkép 2",
        elereiut: "kepek/_DSC7444.jpg"
    },
    {
        cim:"Ötödik",
        leiras:"Tájkép 3",
        elereiut: "kepek/_DSC7515.jpg"
    },
];

function megjelenit(){
    var txt="";
    for (let index = 0; index < kepek.length; index++) {
        txt += "<h3>"+kepek[index].cim+"</h3>";
        txt += "<img src='"+kepek[index].elereiut+"' alt='"+kepek[index].cim+"'>";
        txt += "<p>"+kepek[index].leiras+"</p>";
    }
    ID("galeria").innerHTML=txt;
}

var gomb = document.getElementById('gomb');
gomb.addEventListener('click',hello,false);
document.getElementById('gomb').onclick=hello;
function hello(){
    var txt="";
    for (let index = 0; index < kepek.length; index++) {
        txt += "<h3>"+kepek[index].cim+"</h3>";
        txt += "<img src='"+kepek[index].elereiut+"' alt='"+kepek[index].cim+"'>";
        txt += "<p>"+kepek[index].leiras+"</p>";
    }
    ID("galeria").innerHTML=txt;
}
*/

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