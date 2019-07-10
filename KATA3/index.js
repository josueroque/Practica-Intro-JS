//import { Mano } from './classes/Mano.js';
import Mano from './classes/Mano.js';
let jugador1='2H 3H 4H 2C 2H';  
//let jugador1='2H 3D 5S 9C KD';
let jugador2='2C 3H 4S 8C AH'; 


let manoJugador1=new Mano(jugador1.replace(/\s+/g, ''));

manoJugador1.escaleraColor();
manoJugador1.poker();
manoJugador1.full();
manoJugador1.color();
manoJugador1.escalera();
manoJugador1.trio();
console.log(manoJugador1.cadenaMano);