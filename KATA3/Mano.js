class Mano{
    constructor(mano){
        this.cadenaMano='';    
        this.manoJugador=new Array;
        this.manoJugador=mano.split('');
        this.escalera =true;
        this.valoresNumericos=new Array;
        this.lon =manoJugador.length;
        this.valoresRepetidos= {};
        for (let i=0;i<=(lon-2);i+=2){
            if (isNaN(manoJugador[i])){
                switch(manoJugador[i]) {
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
                this.valoresNumericos.push(parseInt(manoJugador[i]));
            }
    
         }  
    
    }
    escalera(){
        this.escalera=this.valoresNumericos.every( (val, i, arr) => val === arr[0] );
        if (this.escalera===true){
            this.cadenaMano='Escalera de Color';
            return this.cadenaMano;
        }
        
    }

    poker(){
        this.lon=valoresNumericos.length;
        for (let i=0; i<lon;i++){ 
    //        alert(valoresNumericos[i]+ ' ' +i); 
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
                return this.cadenaMano;
               // break;
            }
        } 
    }
}