export default class Mano{
    constructor(mano){
        this.cadenaMano='';   
       // this.determinarMano(); 
        this.manoJugador=new Array;
        this.manoJugador=mano.split('');
      //  this.Escalera =true;
        this.valoresNumericos=new Array;
        this.mismoPalo=false;
        this.consecutivos=false;
        this.lon =this.manoJugador.length;
        this.valoresRepetidos= {};
        this.valorPoker=0;
        this.valorFullTrio=0;
        this.valorFullPareja=0;
        this.valorTrioMasAlto=0;
        this.valorDoblePareja1=0;
        this.valorDoblePareja2=0;
        this.valorPareja=0;

        for (let i=0;i<=(this.lon-2);i+=2){
            if (isNaN(this.manoJugador[i])){
                switch(this.manoJugador[i]) {
                case 'T':  
                    this.valoresNumericos.push(10); 
                    break;
                case 'J':  
                    this.valoresNumericos.push(11); 
                    break;
                case 'Q':  
                    this.valoresNumericos.push(12); 
                    break;
                case 'K':  
                    this.valoresNumericos.push(13); 
                    break;
                case 'A':  
                    this.valoresNumericos.push(14);
                    break; 
                }
            }else {
                this.valoresNumericos.push(parseInt(this.manoJugador[i]));
            }
    
         }  
         this.lon=this.valoresNumericos.length;
         //        return true;
                 for (let i=0; i<this.lon;i++){ 
         
                     if (this.valoresRepetidos.hasOwnProperty(this.valoresNumericos[i])){
                         this.valoresRepetidos[this.valoresNumericos[i]]++;
                     }
                     else {
                         this.valoresRepetidos[this.valoresNumericos[i]]=1;
                     }
                         
                 }
    }

    comprobarConsecutivos(){
        this.valoresNumericos.sort();
        for (let valor in this.valoresNumericos){
           if (valor<4){
             //  alert((parseInt(this.valoresNumericos[parseInt(valor)+1])-1));
                if (this.valoresNumericos[valor]===(parseInt(this.valoresNumericos[parseInt(valor)+1])-1)){
                    this.consecutivos=true;
                }
                else{
                    this.consecutivos=false;
                    break;
                } 
            }
        }
        return this.consecutivos;
    }

    comprobarMismoPalo(){
    for(let palo=1; palo<=(this.manoJugador.length-3);palo+=2){
            
   //    console.log( this.manoJugador[palo] + ' '+this.manoJugador[parseInt(palo)+2]);
        if (this.manoJugador[palo]===this.manoJugador[parseInt(palo)+2]){
            this.mismoPalo=true;
        }
        else{

            this.mismoPalo=false;
            break;
        } 

            
         }
        return this.mismoPalo;
    }
    
    get EscaleraColor(){
        return this.escaleraColor();
    }
    escaleraColor(){
        if (this.comprobarConsecutivos()===true && this.comprobarMismoPalo()===true){
            this.cadenaMano='Escalera de Color';
            return true;
        }
        else {
            return false;
        }
    }

    get Poker(){
        return this.poker();
    };
    poker(){

        for (let valor in this.valoresRepetidos){

            if (this.valoresRepetidos[valor]===4){
                this.valorPoker=valor;
                this.cadenaMano='Poker';
                return true;
            }
        } 
    
        return false;
    }



    get Full(){
        return this.full();
    }

    full(){

 

    //Busco trio
        for (let valor in this.valoresRepetidos){
            this.comprueboTrio=false;
            if (this.valoresRepetidos[valor]===3){
                this.comprueboTrio= true;
                this.valorFullTrio=valor;
                break;
            }
        }     
        //console.log(this.comprueboTrio);    
    //Busco par

        for (let valor in this.valoresRepetidos){
            this.comprueboPar=false;
            
            if (this.valoresRepetidos[valor]===2){
               this.comprueboPar= true;
               this.valorFullPareja=valor;
                break;
            }
        }         
        if ((this.comprueboTrio===true)&& (this.comprueboPar===true)){
            this.cadenaMano='Full'
            return true;
        
        }
        else {
            return false;
        }
    }
    
    get Color(){
        return this.color();
    }

    color(){
        if (this.comprobarConsecutivos()===false && this.comprobarMismoPalo()===true){
            this.cadenaMano='Color';
            return true;
        }
        else {
            return false;
        }
    }

    get Escalera(){
        return this.escalera();
    }
    escalera(){
        if (this.comprobarConsecutivos()===true && this.comprobarMismoPalo()===false){
            this.cadenaMano='Escalera';
            return true;
        }
        else {
            return false;
        }
    }

    get Trio(){
        return this.trio;
    }

    trio(){
        for (let valor in this.valoresRepetidos){
          //  let comprueboTrio=false;
          
            if (this.valoresRepetidos[valor]===3){
                this.cadenaMano="Trio"
                this.valorTrioMasAlto =valor;
                return true;
                //break;
            }
        }    
    }

    get DoblesParejas(){
        return this.doblesParejas();
    }

    doblesParejas(){
        this.buscoDoble=0;
        for (let valor in this.valoresRepetidos){
            if (this.valoresRepetidos[valor]===2){
                this.buscoDoble+=1;
                if (this.buscoDoble===1){
                    this.valorDoblePareja1=valor;    
                }
                else if (this.buscoDoble===2){
                    this.valorDoblePareja2=valor; 
                }
            }
        }
        if (this.buscoDoble===2){
           this.cadenaMano='Dobles Parejas';
            return true;
        }
        else 
        {
            return false;
        }
    }
    get Parejas(){
        return this.Parejas();
    }

    parejas(){
        this.buscoPar=0;
        for (let valor2 in this.valoresRepetidos){
            if (parseInt(this.valoresRepetidos[valor2])===2){
                this.valorPareja=valor2;
                this.buscoPar++;
            }
        }

        if (this.buscoPar===1){
           this.cadenaMano='Parejas';
            return true;
        }
        else 
        {
            return false;
        }
    }

    get CartaMasAlta(){
        return this.cartaMasAlta();
    }

    cartaMasAlta(){
        let buscoMasAlta=0;
        for (let num in this.valoresNumericos){
            if(parseInt(num)===0){
                this.buscoMasAlta=this.valoresNumericos[0];
            }
            else {
               // console.log(this.valoresNumericos[num]+' '+ this.buscoMasAlta);
                if(this.valoresNumericos[num]>this.buscoMasAlta){
                   this.buscoMasAlta= this.valoresNumericos[num];
                }
            }
        }
        if (this.cadenaMano===''){
            this.cadenaMano='Carta Mas Alta'
        }
      //  console.log(this.buscoMasAlta);
        return this.buscoMasAlta;

    }
        
}
