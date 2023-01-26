let menuVisible = false;

function desplegarMenu() { 
    if(menuVisible){
        document.getElementById('nav').classList='';
        menuVisible = false;
    }else{
        document.getElementById('nav').classList='responsive';
        menuVisible = true;
    }
}
function seleccionar(){             //oculto el menu cuando selecciono una opcion
    document.getElementById('nav').classList='';
    menuVisible= false;
}
function efectoHabilidades(){      //animacion en la barra de habilidades
    var skills = document.getElementById('habilidades');
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
       let habilidad = document.getElementsByClassName('progreso');
       habilidad[0].classList.add('javascript');
       habilidad[1].classList.add('htmlycss');
       habilidad[2].classList.add('photoshop');
       habilidad[3].classList.add('librerias');
       habilidad[4].classList.add('comunicacion');
       habilidad[5].classList.add('team');
       habilidad[6].classList.add('creatividad');
    }
}

window.onscroll = function(){       //detecto el scroll para la animacion de barra-habilidades
    efectoHabilidades();
}