//"Ingrese en la variable numero, el tipo de numero que desea ingresar Escriba 1 para numero romano, Escriba 2 para numero arabe"
 let tipoNumero='1';
 let numero='MMXIX';
 
// let tipoNumero='2';
// let numero='2019';

const valoresRomanos={I : 1,V : 5,X : 10,L: 50,C : 100,D : 500,M : 1000};
let numeroArabe=0;    
let numeroRomano='';
let arreglo= new Array;
let mensajeValidacion='ok';
let longitud=0;


function convertirArabes(numRomano){
 
    arreglo=numRomano.split('');

    for(let char in arreglo){
       let indicePosterior= parseInt(char) +1;
       longitud=arreglo.length;
          
        if (indicePosterior < longitud){
         
            if( valoresRomanos[arreglo[char]] < valoresRomanos[arreglo[indicePosterior]] ){
                numeroArabe+=(valoresRomanos[arreglo[char]]*(-1));
                 }
            else {
                numeroArabe+=valoresRomanos[arreglo[char]];
            }
        } else {
            numeroArabe+=valoresRomanos[arreglo[char]];
        }

    }

    return (numeroArabe); 
}

function validarRomanos(numRomano){
arreglo=numRomano.split('');
longitud=arreglo.length;
    for(let char in arreglo){
        let indicePosterior2= parseInt(char) +1;
        let validarI=new Array();
        let validarX=new Array();
        let validarC=new Array();
        validarI=['V','X','I'];
        validarX=['L','C','X'];
        validarC=['D','M','C'];
        if (indicePosterior2 < longitud){
  //Valido I
            if(arreglo[char]==='I'&& (!((validarI.indexOf(arreglo[indicePosterior2]))>=0)) &&
             (valoresRomanos[arreglo[indicePosterior2]])>valoresRomanos[arreglo[char]]){
                mensajeValidacion='I solo puede preceder a V o X, el numero romano proporcionado no es valido'
                return mensajeValidacion;
            
            }
            else if((((validarI.indexOf(arreglo[indicePosterior2]))>=0)) 
            &&arreglo[char]==='I'&& arreglo.length>(indicePosterior2+1)) {
                mensajeValidacion='Numero romano no valido,no puede ir X despues de IX'
                return mensajeValidacion;
//                console.log(char, indicePosterior2+1,arreglo.length,arreglo);
            }
  
    
  //Valido X  
             if(arreglo[char]==='X'&& (!((validarX.indexOf(arreglo[indicePosterior2]))>=0))&&
            (valoresRomanos[arreglo[indicePosterior2]])>valoresRomanos[arreglo[char]]){
            mensajeValidacion='X solo puede preceder a L o C, el numero romano proporcionado no es valido'
            return mensajeValidacion;
            }
            else if( (((validarX.indexOf(arreglo[indicePosterior2]))>=0)) &&arreglo[char]==='X'
            && (arreglo.length>(indicePosterior2+1)) && arreglo[indicePosterior2+1]!=='I') {
                mensajeValidacion='Numero romano no valido,valor invalido despues de C o L'
                return mensajeValidacion;
             
            }
  //Valido C
         //   console.log(arreglo[indicePosterior2+1]+' '+arreglo[char]);            
            if(arreglo[char]==='C'&& (!((validarC.indexOf(arreglo[indicePosterior2]))>=0))&&
            (valoresRomanos[arreglo[indicePosterior2]])>valoresRomanos[arreglo[char]]){
            mensajeValidacion='C solo puede preceder a D o M, el numero romano proporcionado no es valido'
            return mensajeValidacion;
            }
            else if((((validarC.indexOf(arreglo[indicePosterior2]))>=0)) &&
            arreglo[char]==='C'&& (arreglo[indicePosterior2+1]==='M'|| arreglo[indicePosterior2+1]==='D'||arreglo[indicePosterior2+1]==='C') ) {
                mensajeValidacion='Numero romano no valido,valor incorrecto despues de M'
                return mensajeValidacion;
//                console.log(char, indicePosterior2+1,arreglo.length,arreglo);
            }
// console.log(valoresRomanos[arreglo[char]]);
// console.log(valoresRomanos[arreglo[indicePosterior2]]);
            if((arreglo[char]==='V'||arreglo[char]==='L'||arreglo[char]==='D')
            && (valoresRomanos[arreglo[char]]< valoresRomanos[arreglo[indicePosterior2]])){
            //) && charMap[char]>1){
                mensajeValidacion='Numero romano no valido, V,L y D no pueden colocarse a la izquierda de otro mayor'
                return mensajeValidacion;
              //  break;
            }

        }   
        
    }

let charMap={};

let lon=arreglo.length;
    for (let i=0; i<lon;i++){  
            if (charMap.hasOwnProperty(arreglo[i])){
                charMap[arreglo[i]]++;
            }
            else {
                charMap[arreglo[i]]=1;
            }
        
        }
    for (let char in charMap){
 //Reviso que V,Ly D no se repitan 
            if((char==='V'||char==='L'||char==='D')&& charMap[char]>1){
                mensajeValidacion='Numero romano no valido, No se puede repetir '+ char +' mas de una vez'
                return mensajeValidacion;
              //  break;
            }
                


    }     

    //Reviso que I,X,C,M no se repitan mas de tres veces
    let validoIXCM=['I','X','C','M'];
    for(j=0;j<=3;j++){
        let sumaConsecutivos=0;
        for (let i=0; i<lon;i++){  
            
           // console.log(validoIXCM[j] + ' '+arreglo[i] );
            if (validoIXCM[j]===(arreglo[i])){
                sumaConsecutivos++;
                if (sumaConsecutivos===4){
                   mensajeValidacion=validoIXCM[j]+' no puede repetirse mas de tres veces consecutivas, numero romano no valido';
                   return mensajeValidacion;
                }
            }
            else 
            {
                sumaConsecutivos=0;
            }

        }
       
    }
    
  return mensajeValidacion;
}

function convertirRomanos(numero){
   if (isNaN(numero) || parseInt(numero)>3999 || parseInt(numero)<1 ){
       mensajeValidacion='numero no valido';
       console.log('no acepta el numero ')//) + (!isNaN(numero))
       return mensajeValidacion;

   }
   else {
 //Agrego los miles

        let miles=Math.trunc((parseInt(numero)/1000));
        let residuo=(parseInt(numero)%1000);
        //alert (miles);
        for (let i=1;i<=miles;i++){
            numeroRomano+='M';
        }
  //Agrego los centenares
  let centenares=Math.trunc((parseInt(residuo)/100));
  residuo=(parseInt(residuo)%100);
    //alert('centenares ' + centenares);
            if (centenares===9){
             numeroRomano+='CM';

            }
            else if (centenares>=5){
                numeroRomano+='D';
                for (let j=0;j<(centenares-5);j++){
                    numeroRomano+='C';
                }
            }
            else if (centenares===4){
                numeroRomano+='CD';

            }
            else if (centenares<=3){
                for (let j=0;j<centenares;j++){
                numeroRomano+='C';
                }
            }
//Agrego decenas
let decenas=Math.trunc((parseInt(residuo)/10));
  residuo=(parseInt(residuo)%10);
    
            if (decenas===9){
             numeroRomano+='XC';

            }
            else if (decenas>=5){
                numeroRomano+='L';
                for (let k=0;k<(decenas-5);k++){
                    numeroRomano+='X';
                }
            }
            else if (decenas===4){
                numeroRomano+='XL';

            }
            else if (decenas<=3){
                for (let k=0;k<decenas;k++){
                    numeroRomano+='X';
                }
            }

//Agrego unidades
let unidades=Math.trunc((parseInt(residuo)/1));
  residuo=(parseInt(residuo)%1);
    
            if (unidades===9){
             numeroRomano+='IX';

            }
            else if (unidades>=5){
                numeroRomano+='V';
                for (let l=0;l<(unidades-5);l++){
                    numeroRomano+='I';
                }
            }
            else if (unidades===4){
                numeroRomano+='IV';

            }
            else if (unidades<=3){
                for (let l=0;l<unidades;l++){
                    numeroRomano+='I';
                }
            }

   }
   
    return numeroRomano;
}

    if (tipoNumero=='1') {
        if  (validarRomanos(numero)!=='ok'){
            // console.log(numero);
            console.log(mensajeValidacion);
        
        }
        else{
           console.log('El numero arabe equivalente de '+ numero +' es '+convertirArabes(numero));
        }
    }
    else if (tipoNumero='2'){
    console.log('El numero romano equivalente de '+ numero +' es '+convertirRomanos(numero));
    }


