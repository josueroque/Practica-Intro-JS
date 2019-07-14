import Mano from './classes/Mano.mjs';
let masAltaJ1=0;
let masAltaJ2=0;

//Introduzca aqui los valores para probar
let jugador1='2H 2D 5S 9C KD'; 
let jugador2='3C 3H 5C 5S 3H';  

const importanciaMano={'Escalera de Color':9,
'Poker':8,
'Full':7,
'Color':6,
'Escalera':5,
'Trio':4,
'Dobles Parejas':3,
'Parejas':2,
'Carta Mas Alta':1,
};

let manoJugador1=new Mano(jugador1.replace(/\s+/g, ''));
let manoJugador2=new Mano(jugador2.replace(/\s+/g, ''));
let valoresPermitidosValor=['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let valoresPermitidosPalo=['S','H','C','D'];
let mano1=manoJugador1.manoJugador.join('');
let mano2=manoJugador2.manoJugador.join('');
determinarManos();
Principal();
function Principal(){
    try {
      
        if(manoJugador1.manoJugador.length>10||manoJugador2.manoJugador.length>10){
            throw('Solo puede ingresar 10 caracteres por mano');
        }
        if(manoJugador1.manoJugador.length<10||manoJugador2.manoJugador.length<10){
            throw('Debe ingresar al menos 10 caracteres por mano');
        }
        for(let char in mano1){
            if (char===0||(char%2)===0){
                if(valoresPermitidosValor.indexOf(mano1[char])<0){
                   throw('Valor ingresado no es valido')     
                }
            }
            if (char===1||(char%2)===1){
                if(valoresPermitidosPalo.indexOf(mano1[char])<0){
                   throw('Palo ingresado no es valido')     
                }
            }
        }  
        for(let char2 in mano2){
            if (char2===0||(char2%2)===0){
                if(valoresPermitidosValor.indexOf(mano2[char2])<0){
                   throw('Valor ingresado no es valido')     
                }
            }
            if (char2===1||(char2%2)===1){
                if(valoresPermitidosPalo.indexOf(mano2[char2])<0){
                   throw('Palo ingresado no es valido')     
                }
            }
        }
determinarGanador();

      }
      catch(err) {
    console.log(err);
      }
}

function determinarGanador(){
    if (importanciaMano[manoJugador1.cadenaMano]>importanciaMano[manoJugador2.cadenaMano]){
        console.log('Jugador 1 gana '+manoJugador1.cadenaMano);
    }
    else if (importanciaMano[manoJugador1.cadenaMano]<importanciaMano[manoJugador2.cadenaMano]){
        console.log('jugador 2 gana '+manoJugador2.cadenaMano);
    }
    //Desempate Poker
    else if(manoJugador1.cadenaMano==='Poker' && manoJugador2.cadenaMano==='Poker'){
        if(manoJugador1.valorPoker>manoJugador2.valorPoker){
            console.log('Jugador 1 gana Poker con valor Mas Alto');
        }
        else if(manoJugador1.valorPoker<manoJugador2.valorPoker){
            console.log('Jugador 2 gana Poker con valor Mas Alto');
        }
        else if(manoJugador1.CartaMasAlta>manoJugador2.CartaMasAlta){
            console.log('Jugador 1 gana Carta Mas Alta');
        }
        else if(manoJugador1.CartaMasAlta<manoJugador2.CartaMasAlta){
            console.log('Jugador 2 gana Carta Mas Alta');
        }
    }
    //Desempate Full
    else if(manoJugador1.cadenaMano==='Full' && manoJugador2.cadenaMano==='Full'){
        if(manoJugador1.valorFullTrio>manoJugador2.valorFullTrio){
            console.log('Jugador 1 gana Full con trio Mas Alto');
        }
        else if(manoJugador1.valorFullTrio <manoJugador2.valorFullTrio){
            console.log('Jugador 2 gana Full con trio Mas Alto');
        }
        else if(manoJugador1.valorFullPareja>manoJugador2.valorFullPareja){
            console.log('Jugador 1 gana Full con Pareja Mas Alta');
        }
        else if(manoJugador1.valorFullPareja<manoJugador2.valorFullPareja){
            console.log('Jugador 2 gana Full con Pareja Mas Alta');
        }
    }
    //Desempate color
    else if(manoJugador1.cadenaMano==='Color' && manoJugador2.cadenaMano==='Color'){
        desempatar();
    }    
    //Desempate Escalera
    else if(manoJugador1.cadenaMano==='Escalera' && manoJugador2.cadenaMano==='Escalera'){
        desempatar();
    } 
    //Desempate Trio
    else if(manoJugador1.cadenaMano==='Trio' && manoJugador2.cadenaMano==='Trio'){
        if(manoJugador1.valorTrioMasAlto>manoJugador2.valorTrioMasAlto){
            console.log('Jugador 1 gana Trio con valor Mas Alto');
        }
        else if(manoJugador1.valorTrioMasAlto<manoJugador2.valorTrioMasAlto){
            console.log('Jugador 2 gana Trio con valor Mas Alto');

        }
        else {
            desempatar();

        }
    } 
    //Desempato Dobles Parejas
    else if(manoJugador1.cadenaMano==='Dobles Parejas' && manoJugador2.cadenaMano==='Dobles Parejas'){
    //console.log(manoJugador1.valorDoblePareja1 + manoJugador1.valorDoblePareja2 );
    let mayorJ1=Math.max(manoJugador1.valorDoblePareja1,manoJugador1.valorDoblePareja2);
    let mayorJ2=Math.max(manoJugador2.valorDoblePareja1,manoJugador2.valorDoblePareja2);
    let menorJ1=Math.min(manoJugador1.valorDoblePareja1,manoJugador1.valorDoblePareja2);
    let menorJ2=Math.min(manoJugador2.valorDoblePareja1,manoJugador2.valorDoblePareja2);
        if(mayorJ1>mayorJ2){
            console.log('Gana Jugador 1, Pareja con valor mas alto');        
        }
        else if(mayorJ1<mayorJ2){
            console.log('Gana Jugador 2, Pareja con valor mas alto');        
        }
        else if(menorJ1>menorJ2){
            console.log('Gana Jugador 1, Pareja con valor mas alto');        
        }
        else if(menorJ1<menorJ2){
            console.log('Gana Jugador 2, Pareja con valor mas alto');        
        }
        else{
            desempatar();
        }
    }
//Desempato parejas
    else if (manoJugador1.cadenaMano==='Parejas' && manoJugador2.cadenaMano==='Parejas'){
    
        if(manoJugador1.valorPareja>manoJugador2.valorPareja){
            console.log('Gana Jugador 1, Pareja con valor mas alto');   
        }
        else if(manoJugador1.valorPareja<manoJugador2.valorPareja){
            console.log('Gana Jugador 2, Pareja con valor mas alto');   
        }
        else{
            desempatar();
        }
    }
    else{
        desempatar();
    }

}
 function desempatar(){
//console.log(parseInt(manoJugador1.CartaMasAlta) + ' '+parseInt(manoJugador2.CartaMasAlta));
     if (manoJugador1.CartaMasAlta>manoJugador2.CartaMasAlta){
         console.log('Gana Jugardor 1, carta mas alta');
         return;
     }
     else if (manoJugador1.CartaMasAlta<manoJugador2.CartaMasAlta){
        console.log('Gana Jugardor 2, carta mas alta');
        return;
     }
     else{
    let valoresJ1=manoJugador1.valoresNumericos;
  //  console.log(manoJugador1.CartaMasAlta,manoJugador2.CartaMasAlta);
    let posicion=valoresJ1.indexOf(manoJugador1.CartaMasAlta);
    let valoresJ2=manoJugador2.valoresNumericos;
    let posicion2=valoresJ2.indexOf(manoJugador2.CartaMasAlta);
    valoresJ1.splice(posicion,1);
    valoresJ2.splice(posicion2,1);
   // console.log(valoresJ1 + ' '+ valoresJ2);
    for(let i=0;i<=4;i++){
       if(desempatarCartaMasAlta(valoresJ1,valoresJ2) !== 'Empate'){
       // console.log(valoresJ1+ ' '+valoresJ2);   
        console.log(desempatarCartaMasAlta(valoresJ1,valoresJ2));
            break;
       }
       else 
       {
            posicion=valoresJ1.indexOf(masAltaJ1);   
            posicion2=valoresJ2.indexOf(masAltaJ2);
            valoresJ1.splice(posicion,1);
            valoresJ2.splice(posicion2,1);
       }
       
    }
        if( desempatarCartaMasAlta(valoresJ1,valoresJ2) === 'Empate'){
            console.log('Empate');
        }
    }
 }
  

function determinarManos(){
   
    manoJugador1.cartaMasAlta();
    manoJugador1.parejas();
    manoJugador1.doblesParejas();
    manoJugador1.trio();
    manoJugador1.escalera();
    manoJugador1.color();
    manoJugador1.full();
    manoJugador1.poker();
    manoJugador1.escaleraColor();

    manoJugador2.cartaMasAlta();
    manoJugador2.parejas();
    manoJugador2.doblesParejas();
    manoJugador2.trio();
    manoJugador2.escalera();
    manoJugador2.color();
    manoJugador2.full();
    manoJugador2.poker();
    manoJugador2.escaleraColor();
}

function desempatarCartaMasAlta(v1,v2){


    for (let num in v1){
        if(parseInt(num)===0){
            masAltaJ1=v1[0];
        }
        else {
           // console.log(this.valoresNumericos[num]+' '+ this.buscoMasAlta);
            if (v1[num]>masAltaJ1){
               masAltaJ1= v1[num];
            }
        }
    }
    for (let num2 in v2){
        if(parseInt(num2)===0){
            masAltaJ2=v2[0];
        }
        else {
           // console.log(this.valoresNumericos[num]+' '+ this.buscoMasAlta);
            if (v2[num2]>masAltaJ2){
               masAltaJ2= v2[num2];
            }
        }
    }
    //console.log(masAltaJ1 + ' '+masAltaJ2);
    if(masAltaJ1>masAltaJ2){
        return "Jugador 1 gana, carta mas alta";
    }    
    else if(masAltaJ2>masAltaJ1){
        return "Jugador 2 gana, carta mas alta";
    }
    else {
        return "Empate"
    }

}