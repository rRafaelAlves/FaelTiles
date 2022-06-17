const music = document.querySelector('audio');

document.querySelector('.comecar').addEventListener('click', tocarMusica);

function tocarMusica(){
    music.play();
}


document.addEventListener('keydown', function(evento){
    var btn = 'btn' + evento.keyCode;
    var element = document.getElementById(btn);
    if(!element){

        alert('Tecla não configurada')
        return
    }
    console.log(evento.keyCode);
    var color = 'white';


    switch(evento.keyCode){
        case 32:
            color = 'green';
            break;
        case 68:
            color = 'red';
            break;
        case 70:
            color = 'red';
            break;
        case 71:
            color = 'violet';
            break;
        case 72:
            color = 'yellow';
            break;
        case 74:
            color = 'springgreen';
            break;
        case 88:
            color = 'tomato';
            break;
        case 67:
            color = 'pink';
            break;
        case 86:
            color = 'orangered';
            break;
        case 66:
            color = 'darkred';
            break;
        case 78:
            color = 'blue';
            break;
        case 77:
            color = 'gold';
            break;

            default:
            color = 'white';


 }
element.style.background = color;

setTimeout(() => {
    element.style.background = 'white';
}, 150);

})


