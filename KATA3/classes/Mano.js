export class Mano{
    constructor(mano){
        this.cadenaMano='';    
        this.manoJugador=new Array;
        this.manoJugador=mano.split('');
      //  this.Escalera =true;
        this.valoresNumericos=new Array;
        this.mismoPalo=false;
        this.consecutivos=false;
        this.lon =this.manoJugador.length;
        this.valoresRepetidos= {};
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

    }

    comprobarConsecutivos(){
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
            
     //   alert(this.manoJugador[palo]+' '+ this.manoJugador[parseInt(palo)+2]+' '+palo );
             //alert(this.manoJugador);  
        if (this.manoJugador[palo]===this.manoJugador[parseInt(palo)+2]){
            this.mismoPalo=true;
        }
        else{
            alert(this.manoJugador[palo]+' '+ this.manoJugador[parseInt(palo)+2]+' '+palo );
            this.mismoPalo=true;
           //            break;
        } 

            
         }
        return this.mismoPalo;
    }
    
    get Escalera(){
        return this.escalera();
    }
    escalera(){
        if (this.comprobarConsecutivos()===true && this.comprobarMismoPalo()===true){
            this.cadenaMano='Escalera';
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
 
     this.lon=this.valoresRepetidos.length;   

        for (let valor in this.valoresRepetidos){

            if (this.valoresRepetidos[valor]===4){
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
            let comprueboTrio=false;
            if (this.valoresRepetidos[valor]===3){
                this.comprueboTrio= true;
                break;
            }
        }         
    //Busco par
        for (let valor in this.valoresRepetidos){
            let comprueboPar=false;
            if (this.valoresRepetidos[valor]===2){
               this.comprueboPar= true;
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

}