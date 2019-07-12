const numero=15;
const numerosAEvaluar=[3,5,7];
let cadena1=new String (numero.toString());
let arreglo=cadena1.split('') ;
let resultado='';

for (let num in numerosAEvaluar){

   let residuo=numero % numerosAEvaluar[num];

   if(residuo===0){

    switch(numerosAEvaluar[num]){
        case 3: 
            resultado+='Foo';
            break;
        case 5:   
            resultado+='Bar'; 
            break;
        case 7:   
            resultado+='Quix'; 
            break;
    }
        
}   
} 

for (let char in arreglo){
  for (let num in numerosAEvaluar)   
        if(parseInt(arreglo[char])===numerosAEvaluar[num]){
            switch(numerosAEvaluar[num]){
                case 3: 
                    resultado+='Foo';
                    break;
                case 5:   
                    resultado+='Bar';
                    break;
                case 7:   
                    resultado+='Quix'; 
                    break;
        }
    }    
}

console.log(resultado);
