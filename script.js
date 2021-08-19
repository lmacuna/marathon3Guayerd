let seguir=true;
let total = 500;
let fulll = 200;
let pokerr = 800;
let esca = 500;
let gene = 1000;
let na = 100;
console.log("Inicial: " + total);

document.querySelector("#inicio").innerHTML='<p style="font-family:cursive;font-weight:bold;font-size:25px;margin-top:0px;color:whitesmoke">'+`Inicial | ${total}`+'</p>'
document.querySelector("#tipojugada1").innerHTML='<p>'+"A JUGAR"+'</p>'
const sonido=()=>{
  if(total!==0&&seguir===true){
    document.querySelector("#cortina").innerHTML='<audio autoplay="autoplay" loop="loop">'+'<source  src="cortinamusical.mp3"type="audio/mp3"/>'+'</audio>'
  }

}
const jugar=()=>{
  if(seguir===true&&total!==0){
    document.querySelector("#sonido").innerHTML='<audio autoplay>'+'<source src="sonidoDados2.mp3" type="audio/mpeg">'+'</audio>'
  let n = Math.floor(Math.random() * 6 + 1);

  let n2 =  Math.floor(Math.random() * 6 + 1);

  let n3 =  Math.floor(Math.random() * 6 + 1);
  let n4 = Math.floor(Math.random() * 6 + 1);
  let n5 = Math.floor(Math.random() * 6 + 1);
  
  //5 switch con img  
  switch(n){
          case 1:
            document.querySelector("#jugada").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado1Blanco.png">'
            break;
          case 2:
            document.querySelector("#jugada").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado2Blanco.png">'
            break;
          case 3: 
            document.querySelector("#jugada").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado3Blanco.png">'
            break;
          case 4:
            document.querySelector("#jugada").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado4Blanco.png">'
            break;
          case 5:
            document.querySelector("#jugada").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado5Blanco.png">'
            break;
          case 6:
            document.querySelector("#jugada").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado6Blanco.png">'
            break;  

  }
 
switch(n2){
  case 1:
    document.querySelector("#jugada2").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado1Blanco.png">'
    break;
  case 2:
    document.querySelector("#jugada2").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado2Blanco.png">'
    break;
  case 3: 
    document.querySelector("#jugada2").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado3Blanco.png">'
    break;
  case 4:
    document.querySelector("#jugada2").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado4Blanco.png">'
    break;
  case 5:
    document.querySelector("#jugada2").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado5Blanco.png">'
    break;
  case 6:
    document.querySelector("#jugada2").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado6Blanco.png">'
    break;  

}
switch(n3){
  case 1:
    document.querySelector("#jugada3").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado1Blanco.png">'
    break;
  case 2:
    document.querySelector("#jugada3").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado2Blanco.png">'
    break;
  case 3: 
    document.querySelector("#jugada3").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado3Blanco.png">'
    break;
  case 4:
    document.querySelector("#jugada3").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado4Blanco.png">'
    break;
  case 5:
    document.querySelector("#jugada3").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado5Blanco.png">'
    break;
  case 6:
    document.querySelector("#jugada3").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado6Blanco.png">'
    break;  

}
switch(n4){
  case 1:
    document.querySelector("#jugada4").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado1Blanco.png">'
    break;
  case 2:
    document.querySelector("#jugada4").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado2Blanco.png">'
    break;
  case 3: 
    document.querySelector("#jugada4").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado3Blanco.png">'
    break;
  case 4:
    document.querySelector("#jugada4").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado4Blanco.png">'
    break;
  case 5:
    document.querySelector("#jugada4").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado5Blanco.png">'
    break;
  case 6:
    document.querySelector("#jugada4").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado6Blanco.png">'
    break;  

}
switch(n5){
  case 1:
    document.querySelector("#jugada5").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado1Blanco.png">'
    break;
  case 2:
    document.querySelector("#jugada5").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado2Blanco.png">'
    break;
  case 3: 
    document.querySelector("#jugada5").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado3Blanco.png">'
    break;
  case 4:
    document.querySelector("#jugada5").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado4Blanco.png">'
    break;
  case 5:
    document.querySelector("#jugada5").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado5Blanco.png">'
    break;
  case 6:
    document.querySelector("#jugada5").innerHTML= '<img style="width:80px;height:80px" src="IMG/dado6Blanco.png">'
    break;  

}
  
/*   alert(
      "[" + n + "] " + " [" + n2 + "] " + " [" + n3 + "] " + " [" + n4 + "] " + " [" + n5
          + "] "); */

  var full =
      (n == n2 && n == n5)
          || (n == n2 && n == n3 && n != n4 && n != n5 && n4 != n3)
          || (n2 == n3 && n3 == n4 && n2 != n && n2 != n5)
          || (n3 == n4 && n4 == n5 && n3 != n && n3 != n2)
          || (n == n4 && n == n5 && n4 != n3 && n5 != n2)
          || (n2 == n4 && n2 == n5 && n2 != n && n2 != n3)
          || (n == n3 && n == n5)
          || (n == n2 && n == n4)
          || (n == n2 && n == n4 && n != n3 && n != n5)
          || (n == n3 && n == n4)
          || (n2 == n3 && n3 == n5 && n2 != n && n2 != n);
  var poker =
      (n == n2 && n2 == n3 && n3 == n4 && n4 != n5)
          || (n2 == n3 && n3 == n4 && n4 == n5 && n5 != n)
          || (n3 == n4 && n4 == n5 && n5 == n && n5 != n2)
          || (n4 == n5 && n5 == n && n == n2 && n2 != n3)
          || (n5 == n && n == n2 && n2 == n3 && n3 != n4);
  var generala = (n == n2 && n2 == n3 && n3 == n4 && n4 == n5);
  //var jugada = ((poker) || (full) || (generala));
  var escalera =
      ((poker == false) && (full == false) && (generala == false))
          && (n == 3 || n == 4 || n == 5 || n2 == 3 || n2 == 4 || n2 == 5 || n3 == 3 || n3 == 4
              || n3 == 5 || n4 == 3 || n4 == 4 || n4 == 5 || n5 == 3 || n5 == 4 || n5 == 5)
          && (n != n2 && n != n3 && n != n4 && n != n5)
          && (n2 != n && n2 != n3 && n2 != n4 && n2 != n5)
          && (n3 != n && n3 != n2 && n3 != n4 && n3 != n5)
          && (n4 != n && n4 != n2 && n4 != n3 && n4 != n5)
          && (n5 != n && n5 != n2 && n5 != n3 && n5 != n4)
          && (n == 5 || n2 == 5 || n3 == 5 || n4 == 5 || n5 == 5)
          && (n == 3 || n2 == 3 || n3 == 3 || n4 == 3 || n5 == 3)
          && (n == 4 || n2 == 4 || n3 == 4 || n4 == 4 || n5 == 4);
  // full 3 iguales
  // poker 4 iguales
  // generala 5 iguales
  // escaleras
  /* {1,2,3,4,5}; {2,3,4,5,6}; {3,4,5,6,1}*/

  if (full && poker == false && generala == false) {
    total = total + fulll;
    
    document.querySelector("#sonido").innerHTML='<audio autoplay>'+'<source src="sonidoPremio.mp3" type="audio/mpeg">'+'</audio>'
    document.querySelector("#tipojugada1").innerHTML='<p>'+"HICISTE FULL"+'</p>'
    document.querySelector("#tipoJugada").innerHTML='<p>'+`FULL | ${fulll}`+'</p>'
    document.querySelector("#tablero").classList.replace("dados","full");
    document.querySelector("#tablero").classList.replace("escalera","full")
    document.querySelector("#tablero").classList.replace("poker","full")
    document.querySelector("#tablero").classList.replace("generala","full")
    //alert("\n full " + fulll);
  }
  if (poker && generala == false) {
    total = total + pokerr;
    document.querySelector("#sonido").innerHTML='<audio autoplay>'+'<source src="felicidades.mp3" type="audio/mpeg">'+'</audio>'
    document.querySelector("#tipoJugada").innerHTML='<p>'+`POKER | ${pokerr}`+'</p>'
    document.querySelector("#tablero").classList.replace("dados","poker")
    document.querySelector("#tablero").classList.replace("full","poker")
    document.querySelector("#tablero").classList.replace("escalera","poker")
    document.querySelector("#tablero").classList.replace("generala","poker")
    document.querySelector("#tipojugada1").innerHTML='<p>'+"HICISTE POKER"+'</p>'
   // alert("\n poker " + pokerr);
  }
  if (generala) {
    total = total + gene;
    document.querySelector("#sonido").innerHTML='<audio autoplay>'+'<source src="premioMayor.mp3" type="audio/mpeg">'+'</audio>'
    document.querySelector("#tipoJugada").innerHTML='<p>'+`GENERALA | ${gene}`+'</p>'
    document.querySelector("#tablero").classList.replace("dados","generala")
    document.querySelector("#tablero").classList.replace("full","generala")
    document.querySelector("#tablero").classList.replace("escalera","generala")
    document.querySelector("#tablero").classList.replace("poker","generala")
    document.querySelector("#tipojugada1").innerHTML='<p>'+"HICISTE GENERALA"+'</p>'
   // alert("\n generala " + gene);
  }
  if (escalera && full == false && poker == false && generala == false) {
    total = total + esca;
    document.querySelector("#sonido").innerHTML='<audio autoplay>'+'<source src="premioMayor.mp3" type="audio/mpeg">'+'</audio>'
    document.querySelector("#tipoJugada").innerHTML='<p>'+`ESCALERA | ${esca}`+'</p>'
    document.querySelector("#tablero").classList.replace("dados","escalera")
    document.querySelector("#tablero").classList.replace("full","escalera")
    document.querySelector("#tablero").classList.replace("poker","escalera")
    document.querySelector("#tablero").classList.replace("generala","escalera")
    document.querySelector("#tipojugada1").innerHTML='<p>'+"HICISTE ESCALERA"+'</p>'
   // alert("\n escalera " + esca);
  }
  if (full == false && poker == false && generala == false && escalera == false) {
    total = total - na;
    
    document.querySelector("#tipoJugada").innerHTML='<p>'+`NADA | -${na}`+'</p>'
    document.querySelector("#tablero").classList.replace("full","dados")
    document.querySelector("#tablero").classList.replace("escalera","dados")
    document.querySelector("#tablero").classList.replace("poker","dados")
    document.querySelector("#tablero").classList.replace("generala","dados")
    document.querySelector("#tipojugada1").innerHTML='<p>'+"NADA"+'</p>'
    //alert("\nNada -" + na + "\n");
    if(total===0){
      seguir=false;
      document.querySelector("#sonido").innerHTML='<audio autoplay>'+'<source src="gameover.mp3" type="audio/mpeg">'+'</audio>'
      document.querySelector("#mensaje").innerHTML='<p>'+`FIN DEL JUEGO `+'</p>'
      document.querySelector("#denuevo").innerHTML='<button style="width:110px !important;font-size:18px !important" onclick="otravez()">'+"Jugar de nuevo"+'</button>'
      document.querySelector("body").classList.add("perder")
      document.querySelector("#cortina").innerHTML='<audio muted="muted">'+'<source src="" type="audio/mpeg">'+'</audio>'
      
    }
  }
  
  //seguir=parseInt(prompt("seguir jugando?\n1-si\n2-salir\n"));

document.querySelector("#subtotal").innerHTML='<p>'+`PUNTOS ACUMULADOS ${total}`+'</P>'
} 
}


const otravez=()=>{
  document.querySelector("#mensaje").innerText=""
  document.querySelector("#denuevo").innerHTML=""
  document.querySelector("#tipoJugada").innerHTML=""
  document.querySelector("#subtotal").innerHTML=""
  document.querySelector("#tipojugada1").innerHTML='<p>'+"A JUGAR"+'</p>'
  document.querySelector("body").classList.replace("perder","body")
  seguir=true;
  total=500;
 
 
}