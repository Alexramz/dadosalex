//parseInt(document.getElementById("numero1").value)
//var u1=document.getElementById("name-0").;
//document.getElementById("aqui").innerHTML=texto
//-----PRUEBAS--------
//-----PRUEBAS--------
//VARIABLES
    //bandera
    var ban = true;
    
    //random
    var random=0/*parseInt(Math.floor(1+(Math.random() * 5)))*/;
    //usuarios
    //var u0 = document.getElementById("name-0").innerHTML;
    //var u1 = document.getElementById("name-1").innerHTML;
    //acumulable final    
    var af0 = parseInt(0)/*parseInt(document.getElementById("score-0").innerHTML)*/;
    var af1 = parseInt(0)/*parseInt(document.getElementById("score-1").innerHTML)*/;
    //acumulables
    var ac0 = parseInt(0)/*parseInt(document.getElementById("current-0").innerHTML)*/;
    var ac1 = parseInt(0)/*parseInt(document.getElementById("current-1").innerHTML)*/;
    var sf = parseInt(100);
    var u0="Player 1";
    var u1="Player 2";
    document.getElementById("name-0").innerHTML=u0;
    document.getElementById("name-1").innerHTML=u1;
   // document.getElementById("aqui").innerHTML="usu1 "+u0+af0+ac0+" \nusu2 "+u1+af1+ac1+" Random "+random+" ban "+ban;

//VARIABLES
//FUNCION JUGAR
function prueba(){
    
    //usuario 0
    if(ban){
       random=parseInt(Math.floor(1+(Math.random() * 6)));
        document.getElementById("dice").src = random+".png";
        if(random >= 2){
            ac0=ac0+random;
            document.getElementById("current-0").innerHTML=ac0
           
           }
        else if(random==1){
                ban=false;
                ac0=0;
            document.getElementById("current-0").innerHTML=ac0;
            document.getElementById("player-0-panel").classList.remove("active");
            document.getElementById("player-1-panel").classList.add("active");
                }
        else if(af0>99){
            alert("Jugador 1 Ganaste!!!")    
                }
       }
    //TERMINA IF 0
    
    //usuario 1
    else if(ban==false){
        random=parseInt(Math.floor(1+(Math.random() * 6)));
        document.getElementById("dice").src = random+".png";
        
        if(random >= 2){
            ac1=ac1+random;
            document.getElementById("current-1").innerHTML=ac1
           }
        else if(random==1){
                ban=true;
                ac1=0;
            document.getElementById("current-1").innerHTML=ac1
            document.getElementById("player-1-panel").classList.remove("active");
            document.getElementById("player-0-panel").classList.add("active");
        }
        else if(af1>30){
                alert("Jugador 2 Ganaste!!!")
                }
            
        }
}

function guardar(){
    if(ban){
        ban=false;
        af0=af0+ac0;
        document.getElementById("score-0").innerHTML=af0;
        ac0=0;
        document.getElementById("current-0").innerHTML=0;
        document.getElementById("player-0-panel").classList.remove("active");
        document.getElementById("player-1-panel").classList.add("active");
        
        if(af0>=sf){alert("Jugador 1 Ganaste!!!");}
    }
    else if(ban==false){
        ban=true;
        af1=af1+ac1;
        document.getElementById("score-1").innerHTML=af1;
        ac1=0;
        document.getElementById("current-1").innerHTML=0;
        document.getElementById("player-1-panel").classList.remove("active");
        document.getElementById("player-0-panel").classList.add("active");
        
        if(af1>=sf){alert("Jugador 2 Ganaste!!!");}
    }
}

function newgame(){
   location.reload();
    sf = prompt("Ingresa la puntuacion final!!");
    u1 = prompt("Ingresa el Usuario 1");
    u2 = prompt("Ingresa el Usuario 2");
    document.getElementById("name-0").innerHTML=u0;
    document.getElementById("name-1").innerHTML=u1;
}