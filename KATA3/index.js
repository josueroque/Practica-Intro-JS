import Mano from './classes/Mano.js';
let masAltaJ1=0;
let masAltaJ2=0;
let jugador1='2H 3D 5S 9C KD'; 
let jugador2='2C 3H 6S 9C KH';  
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
determinarManos();
//console.log(manoJugador1.cadenaMano + ' '+manoJugador2.cadenaMano);

if (importanciaMano[manoJugador1.cadenaMano]>importanciaMano[manoJugador2.cadenaMano]){
    console.log('Jugador 1 gana '+manoJugador1.cadenaMano);
}
else if (importanciaMano[manoJugador1.cadenaMano]<importanciaMano[manoJugador2.cadenaMano]){
    console.log('jugador 2 gana '+manoJugador2.cadenaMano);
}
else if(manoJugador1.CartaMasAlta>manoJugador2.CartaMasAlta){
    console.log('Jugador 1 gana Carta Mas Alta');
}
else if(manoJugador1.CartaMasAlta<manoJugador2.CartaMasAlta){
    console.log('Jugador 2 gana Carta Mas Alta');
}
else if(importanciaMano[manoJugador1.cadenaMano]===1 && importanciaMano[manoJugador2.cadenaMano]===1){
    let valoresJ1=manoJugador1.valoresNumericos;
    let posicion=valoresJ1.indexOf(manoJugador1.CartaMasAlta);
    let valoresJ2=manoJugador2.valoresNumericos;
    let posicion2=valoresJ2.indexOf(manoJugador2.CartaMasAlta);
    valoresJ1.splice(posicion,1);
    valoresJ2.splice(posicion2,1);
   // console.log(valoresJ1 + ' '+ valoresJ2);
    for(let i=0;i<=4;i++){
       if(desempatarCartaMasAlta(valoresJ1,valoresJ2) !== 'Empate'){
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

function determinarManos(){
    manoJugador1.escaleraColor();
    manoJugador1.poker();
    manoJugador1.full();
    manoJugador1.color();
    manoJugador1.trio();
    manoJugador1.doblesParejas();
    manoJugador1.parejas();
    manoJugador1.cartaMasAlta();
    manoJugador2.escaleraColor();
    manoJugador2.poker();
    manoJugador2.full();
    manoJugador2.color();
    manoJugador2.trio();
    manoJugador2.doblesParejas();
    manoJugador2.parejas();
    manoJugador2.cartaMasAlta();
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