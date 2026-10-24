//alert("Hola Mundo");  
//console.log("Hola Mundo"); 

//alert me genera una ventana emergente
//console.log me muestra el mensaje en la consola de navegacion

//algoritmo suma 
function suma(){
let n1;
let n2;
let suma;

n1=parseInt(prompt("ingresa el primer numero que desea sumar"));
n2=parseInt(prompt("ingresa el segundo numero que desea sumar"))
suma=n1+n2;
//
console.log("EL RESULTADO DE LA SUMA:"+suma);
}

// operaciones basicas
function operaciones(){



let resta;
let multiplicacion;
let division;
let s;
let a;
let b;

a=parseInt(prompt("ingresa un numero"));
b=parseInt(prompt("ingresa otro numero"))
resta= a-b;
multiplicacion=a*b;
division= a/b;
s=a+b;
//
console.log("EL RESULTADO DE LA SUMA:"+s);
console.log("EL RESULTADO DE LA MULTILPLICACION:"+multiplicacion);
console.log("EL RESULTADO DE LA RESTA:"+resta);
console.log("EL RESULTADO DE LA DIVISION:"+division);
}
// secuenciales 








//

  

//numero positivo o negativo 
function npositivo(){
let numero 
numero=parseInt(prompt("ingrese el numero para saber si es negativo o positivo"));
if (numero>=0) {
    console.log("el numero ingresado:"+numero,"es positivo");
}else{ 
    console.log("el numero ingresado:"+numero,"es negativo");
}
}

//algoritmo de edad
function edad(){ 
let edad
edad=parseInt(prompt("ingrese du edad para saber si es un alolecente, niño, bebe o adulto"));
if(edad<=3){
    console.log("es un bebe");
}else if(edad<=14){
    console.log("es un niño");
}else if(edad<=18){
    console.log("es una adolcente");
}else{
    console.log("es una adulto")
}
}


//
function sumaDosNumeros(){
    let n1,n2,suma;

    alert("este algoritmo suma los dos numeros ingresados por el usuario");
    n1=parseFloat(prompt("ingrese el primer numero"));
    n2=parseFloat(prompt("ingrese el segundo numero"));

    suma=n1+ n2
    alert("el resultrado de la suma es "+suma);
}
    
function operacionesBasicas(){
    let n1,n2,suma,resta,multiplicacion,division;
    n1=parseFloat(prompt("ingrese el primer numero"));
    n2=parseFloat(prompt("ingrese el segundo numero"));

    suma=n1+n2
    alert("el resultrado de la suma es "+suma);
    resta=n1-n2
    alert("el resultado de la resta es "+resta);
    multiplicacion=n1*n2
    alert("el resultado de la multiplicacion es "+multiplicacion);
    division=n1/n2
    alert("el resultado de la division es "+division)

}

function conversorDeUnidades(){
    let m,cm,km;
    m=parseFloat(prompt("ingrese un valor en metros"));

    cm=m*100
    alert("el resultado covertido a centimetros es"+cm);
    km=m/1000
    alert("el resultado de la conversion a km es "+km);
}

function conversorDeunidadesdeTemperatura(){
    let c,f,k;
    c=parseFloat(prompt("ingrese un valor en grados celsius"));

    f=(c*9/5)+32
    alert("el resultado de convertir celsius a farenheit es"+f);
    k=c+273.15
    alert("el resultado de convertir de celsius a kelvin"+k)
}

function areaPerimetroDeTriangulo(){
    let b,a,area,perimetro;
    b=parseFloat(prompt("ingresela base del rectangulo"));
    a=parseFloat(prompt("ingrese la altura del rectangulo"));
area=b*a
alert("el resultado del area de un rectangulo es"+area);
perimetro=(b+a)*2
alert("el resultado del perimetro de un rectangulo es"+perimetro);
}


function promedioDeTresNotas(){
    let n1,n2,n3,suma,promedio;
    n1=parseFloat(prompt("ingrese el primer numero"));
    n2=parseFloat(prompt("ingrese el segundo numero"));
    n3=parseFloat(prompt("ingrese el tercer numero"));
    suma=n1+n2+n3
    alert("el resultado de la suma es"+suma);
promedio=suma/3
alert("el resultado del promedio es "+promedio);

}

function conversionTiempo(){
    let seg;
    let min;
    let hor;

    seg=parseFloat(prompt("ingrese un valor en segundos"));

    min=seg/60
    alert("el resultado de la conversion a minutos es :"+min)
    hor=seg/3600
    alert("el resultado de la conversion a horas es:"+hor)
    

}


function conversionUnidadesPeso(){
    let kilogramos;
    let gramos;
    let libras;
    let toneladas;
alert("algoritmo que convierta de kilogramos a gramos , libras y toneladas");
kilogramos=parseFloat(prompt("ingrese el peso en kilogramos"));
    gramos=kilogramos*1000;
    libras=kilogramos*2.204462;
    toneladas=kilogramos/1000;

    alert("los g ingresados equivalen a:" + gramos + "gramos" +  libras+  "libras" +toneladas  + "toneladas");
}

function pesoDiferentesPlanetas(){
let Pt
let Luna
let mercurio
let venus
let Marte
let jupiter
let saturno
let urano
let neptuno

alert("algoritmo de peso en luna y  planetas del sistemasolar");
    Pt=parseFloat(prompt("ingrese su peso en la tierra"));
    Luna=Pt*0.166
alert("la conversion de peso a la luna es: "+Luna);
mercurio=Pt*0.38
alert("la conversion de peso  a  mercurio es: "+mercurio);
venus=Pt*0.91
alert("el resultado de la conversion de peso a venus es:"+venus);
Marte=Pt*0.38
alert("el resultado de conversion de peso a marte es:"+Marte);
jupiter=Pt*2.34
alert("el resultado de conversion de peso a jupiter es:"+jupiter);
saturno=Pt*1.06
alert("el resultado de conversion  de peso a saturno es: "+ saturno);
urano=Pt*0.92
alert("el resultado de conversion de peso a urano es: "+ urano);
neptuno=Pt*1.19
alert("el resultado de la conversion de peso a neptuno es:" + neptuno);

}

function calculoDeCompra(){
    let p1,p2,p3
    let c1,c2,c3
    let sub1,sub2,sub3
    let total 

    alert("algoritmo de compra de tres productos");
    p1=parseFloat(prompt("ingrese el precio del primer producto"));
    c1=parseFloat(prompt("ingrese la cantidad del primer producto"));
    sub1=p1*c1
    p2=parseFloat(prompt("ingrese el precio del segundo producto "));
    c2=parseFloat(prompt("ingrese la cantidad del segundo producto"));
    sub2=p2*c2
    p3=parseFloat(prompt("ingrese el precio del tercer producto"));
    c3=parseFloat(prompt("ingrese la cantidad del tercer producto"));
    sub3=p3*c3
    total=sub1+sub2+sub3
    alert("el total a pagar es : "+total);
}

function calculoDeSalario(){
    let salario
    let dias 
    let otrosdevengados
    let devengado
    let salud
    let pension
    let pagoneto 

    alert("algoritmo de pago de un trabajador ");
    salario=parseFloat(prompt("ingrese el salario que gana mensualmente"));
    dias=parseFloat(prompt("ingrese los dias que trabao al mes"));
    otrosdevengados=parseFloat(prompt("ingrese el valor de otros costos"));
devengado= (salario/30)*dias
salud=devengado*0.04
pension=devengado*0.04
pagoneto=otrosdevengados+devengado-salud-pension
alert("el pago total que debe recibir es:"+pagoneto);
}

function facturaServicio(){
    let consumo
    let precio 
    let porclmp
    let subtotal
    let vallmp
    let total

    alert("algoritmo de pago de un servicio publico");
    consumo=parseFloat(prompt("ingrese el consumo del servicio"));
    precio=parseFloat(prompt("ingrese el costo por unidad de consumo"));
    porclmp=parseFloat(prompt("Ingrese el porcentaje de impuesto aplicable "));
    subtotal=consumo*precio
    alert("el resultado del subtotal del servicio es:"+subtotal)
    vallmp=subtotal*(porclmp/ 100)
    total=subtotal + vallmp
    alert("el total a apagar es: "+total);
    
}

function costoViajeVehiculo(){
    let distanciarecorrida
    let LitrosPorKilometro
    let preciolitrogasolina
    let totalitrosgasolina
    let costototalgasolina
     
    alert("algoritmo de costo de combustible para un viaje");
    distanciarecorrida = parseFloat(prompt("ingrese la distancia recorrida"));
    LitrosPorKilometro = parseFloat(prompt("ingresa el consumo promedio de gasolina del vehicuo"));
    preciolitrogasolina = parseFloat(prompt("ingrese el precio del combustible"));
    totalitrosgasolina= distanciarecorrida * LitrosPorKilometro
    alert("la cantidad de combustible consumido es: "+totalitrosgasolina+"litros");
    costototalgasolina= totalitrosgasolina * preciolitrogasolina
    alert("el valor del conbustible consumido es:"+costototalgasolina);
}


function tiempoViaje(){
   let dtr=parseFloat(prompt(" ingresa la  distancia de recorrido en km"));
   let vprom=parseFloat(prompt(" ingresa la velocidad proemdio en kl por hora"));

   let tmpv= dtr/vprom


alert("el tiempo estimado del viaje  es:" +tmpv+"horas");
}

function sistemaBasicoDeNotas(){
    let n1=parseFloat(prompt("ingrese la primera nota "));
    let por1 =parseFloat(prompt("ingrese el porcentaje de la  nota"));
    let n2=parseFloat(prompt("ingrese la segunda nota  "));
    let por2 = parseFloat(prompt("ingrese el porcentaje de la nota"));
    let n3=parseFloat(prompt("ingrese la tercer nota "));
    let por3=parseFloat(prompt("ingrese el porcentaje de la  nota"));
    let aporte1
    let aporte2
    let aporte3  
    let total

 aporte1=n1 * (por1 / 100)
 aporte2=n2 * (por2/100)
 aporte3=n3 * (por3/100)


     aporte1=n1 * por1 / 100
     aporte2=n2 * por2 /100
     aporte3=n3 * por3/100
    total=aporte1+aporte2+aporte3;
     alert(" la nota final de estudiante es: "+total);
}


function conversorDeMonedas(){
    let cop=parseFloat(prompt("ingrese el  valor en peso colombiano"));
    let dol;
    let eur;
    let pmex;

    dol=cop/4000
    pmex=cop/200
    eur=cop/4400
    alert("el valor equivalente en dolares es: "+dol);
    alert("el valor equivalente en euros es: "+eur);
    alert("el valor eqivalente en pesos meicanos es "+pmex);

    
}














// Numero positivo 

function numeroPositivo() {
    let ne ;
    ne= parseFloat( prompt( " ingresa un numero entero"));
    if (ne>=0) {
        alert("es un numero positivo");
    } else {
        alert( "es un numero negativo");
    }   
}

//numero par o impar

function numeroParImpar(){
    let ne
    ne=parseFloat(prompt("ingresa un numero entero"));
    if (ne % 2==0){
        alert( "es  un numero par");
    } else {
        alert("es un numero impar");
    }
}

// mayor de dos numeros 
 
function mayorDeDosNumeros(){
    let n1,n2;

    n1= parseFloat( prompt( " Ingresa un numero "));
    n2= parseFloat(prompt(" ingresa otro numero"));

    if (n1>n2){
        alert("el numero mayor es:"+n1);

    } else {
        alert("el numero mayor es:"+n2);
    }
}
// descuento por compra

function descuentoPorCompra(){
    let vlc,des,tp;

    vlc= parseFloat(prompt(" ingresa el valor de la compra"));


    if ( vlc>=200000){
        alert("se aplica un descuento del 10%");
        des=vlc*0.10;
        tp=vlc-des;
    } else {
        tp=vlc;
    }
    alert(" el total a pagar es:"+tp);


}
// temperatura de una ciudad

function temperaturaDeUnaCiudad(){
    let tg;

    tg= parseFloat(prompt("ingresa la temperatura en grados celsius"));

    if( tg>30 ) {
        alert("la temperatura es alta");

    } else{
        alert(" la temperatura es baja");
    }
}

//mayor de edad
function mayorDeEdad(){
    let ed;

    ed= parseFloat(prompt("ingresa tu edad"));

    if (ed>=18){
        alert(" ya eres mayor de edad");

    }else{
        alert(" no eres mayor de edad");
    }
}
// retiro de dinero 
function retiroDeDinero (){
    let sld,vr,sd;

    sld=parseFloat(prompt(" ingrese el saldo de su cuenta"));
    vr= parseFloat(prompt("ingrese el  valor que desea retirar"));

    if(vr<=sld){
        alert("retiro exitoso");
        sd=sld-vr;
       alert("saldo disponible:"+ sd);

    } else {
        alert(" saldo insuficiente");
    }
}

//envio gratuito
function retiroGratuito(){
    let vlc,ttp,cen;
    cen=0;
    vlc= parseFloat(prompt(" ingrese el valor de su compra"));
    if(vlc>=150000){
        alert(" envio gratis");

    } else{
        alert( "se hace cobro del envio");
        cen=12000;

    }

    ttp=vlc+cen;
    alert(" el total a pagar es;"+ttp+ " el costo de envio es de:"+cen);
}

//numero mayor o menor que otro

function numeroMayorMenor(){
    let n1,n2;
    
    n1=parseFloat(prompt("ingresa un numero para comparar"));
    n2=parseFloat(prompt("ingresa otro un numero para comparar"));
    if(n1>n2){
        alert("el numero"+n1+" es mayor");
  
    } else if(n1<n2){
        alert(" el numero"+n2+" es mayor");
            
        
             
        
    }else{ 
        alert("los numeros son iguales");

        

    }
}

// tarifa de paequeadero 

function tarifaParqueadero(){
    let nh,tp

    nh=parseFloat(prompt(" ingresa el numero de horas que pemaneciste en el parqueadero"));

    if (nh<=1){
        ttp=5000;
    } else if ( nh<=3){
        ttp=10000;

    } else if ( nh<=6){
        ttp=18000;
    } else if( nh>8){
        ttp=25000
    }
    alert("el valor a pagar es:"+ ttp)
        
        
}
// tarifa de transporte

function tarifaTransporte(){

  let ed,psj;
  psj=0;
  ed= parseFloat(prompt( "ingrese su edad"));
  if(ed<5){

   } else if( ed<17){
     psj=2000
   } else if(ed<19){
     psj=3500
   }else if(ed>= 60){
    psj=2500
   }

   alert(" el costo de su pasaje es de:"+ psj);
}

//clasificacion de velocidad

function clasificacionVelocidad(){
    let vh;
    vh=parseFloat(prompt(" ingrese la velocidd del vehiculo"));

    if(vh<=30){
        alert("la velocidad es baja");
    } else if( vh<=60){
        alert("la velocidad es moderada");

    } else if ( vh<=100){
        alert("la velocidad es alta");
    } else if ( vh >100){
        alert("la velocidad es  muy alta");
    }

    
}

// mes y dias 
 function mesDias(){
    let nm;
    alert(" 1:ene. 2:feb. 3:mar. 4:abr. 5:may. 6:jun. 7:jul: 8:ago. 9:sep. 10:oct. 11:nov. 12: dic.");

    nm=parseFloat(prompt("ingresa el numero de mes"));
    if( nm ==1){
        alert(" el mes tiene 31 dias");
    } else if ( nm == 2){
        alert(" el mes tiene 28 dias");
    } else if ( nm == 3){
        alert(" el mes tiene 31 dias");
    }else if ( nm == 4){
        alert(" el mes tiene 30 dias");
    }else if ( nm == 5){
        alert(" el mes tiene 31 dias");
    } else if ( nm==6 ){
        alert(" el mes tiene 30 dias");
    } else if ( nm==7) {
        alert(" el mes tiene 31 dias");
    } else if ( nm==8){
        alert(" el mes tiene 31 dias");
    } else if ( nm==9){
        alert(" el mes tiene 30 dias");
    }else if ( nm==10){
        alert(" el mes tiene 31 dias");
    }else if ( nm==11){
        alert(" el mes tiene 30 dias");
    } else if ( nm== 12){
        alert(" el mes tiene 31 dias");
    }
 }
 //acceso a una atraccion

 function accesoAtraccion(){
    let ed,est;
    ed=parseFloat(prompt(" ingrese su edad"));
    est=parseFloat(prompt(" ingrese su estatura"));
    if(ed<12){
        alert("no cumple los requisitos ");
    } else if (est>1.39){
        alert("puede ingresar");
    }else {
        alert("no cumple los requisitos");
    }
    
    
 }
 // descuento segun cliente 
 function descuentoCLiente(){
    let ttc,des,ttp;
    let tdc;
    alert(" tipo de cliente: 1:frecuente. 2:normal");

    tpd= parseFloat(prompt(" ingres el tipo de cliente"));
    ttc=parseFloat(prompt(" ingres el total de la compra"));
    if( ttc<200000){
        ttp=ttc
    } else if ( tdc= 1){
        alert("descuento del 10%" );
        des=ttc*0.10;

    }else if( tdc=2){
         alert("descuento del 5%" );
         des=ttc*0.05;

    }
    ttp= ttc-des;
  alert("el cliente debe pagar:"+ttp+" el descuento hecho es de:"+des);
 }
// cajero automatico
function cajeroAutomatico(){
    let sal,vr;
    sal=parseFloat(prompt(" ingresa el saldo disponible en tu cuenta"));
    vr=parseFloat(prompt("ingresa la cantidad que deseas retirar"));
    if(vr<0){
        alert(" el valor debe ser mayor a 0");

    } else if ( vr % 10000){
        if(vr<sal){
            alert("retiro exitoso")
        } else {
            alert(" fallo el retiro por saldo insuficiente");
        }
    }else {
        alert( "el valor ingresado debe ser multiplo de 10000");
    }

}
//validacion de contraseña
function validacionContraseña(){
    let usu="juan";
    let clv=1234;
    let user;
    let pas;
    user= prompt( "ingrese el usuario");
    if( usu==user){
        pas= parseFloat( prompt("ingrese la contraseña"));
        if( clv==pas){
            alert(" bienvenido");

        }else {
            alert( "contraseña incorrecta");
            
    }
        
    }else{
        alert("usuario incorrecto");
    }
}
// año bisiesto
function añoBisiesto(){
    let  año;

    año=parseFloat(prompt(" ingresa el año "));

    if( año % 400==0){
        alert("es un año bisiesto");

    }else if (año % 4==0){
        if(año % 100!=0){
            alert(" es un año bisiesto");

        } else{
            alert(" no es un año bisiesto");

        }
    }else{
      alert(" es un año bisiesto");  
    }
}
// clasificacion de triangulos
function clasificacionTriangulos (){
    let l1,l2,l3;
    
    l1=parseFloat(prompt("ingrese el primer lado"));
    l2=parseFloat(prompt("ingrese el segundo lado"));
    l3=parseFloat(prompt("ingrese el tercer lado"));

    if(l1==l2|| l2==l3 ){
    alert(" es un triangulo equilatero");
    }else if( l1==l2||l1==l3){
        alert(" es un triangulo isoceles");
    } else{
        alert(" es un triangulo escaleno");
    }

} 
// calculadora
function calculadora(){
    let n1,n2,n;
    let s=1
    let r=2
    let m=3
    let d=4
    

    n1=parseFloat(prompt("ingrese el primer numero"));
    n2=parseFloat(prompt("ingrese el segundo numero"));
    alert("menu de opciones: 1.suma  2.resta  3.multiplicacion  4.divicion");
    sp=parseFloat(prompt("ingresa numero de la operacion que desea realizar"));

    s=n1+n2
    r=n1-n2
    m=n1*n2
    d=n1/n2

    if( sp==1){
        alert("el resultado de la operacion es:"+s);
       
    }else if( sp==2){
        alert("el resultado de la operacion es:"+r);
    }else if(sp==3){
        alert("el resultado de la operacion es:"+m);
    }else if(sp==4){
        alert("el resultado de la operacion es:"+d);
    }

}
// sistema de tarifas de equipaje

function tarifasEquipaje(){
    let ps;

    ps=parseFloat(prompt("ingrese el peso del equipaje"));

    if (ps>23){
        alert(" no tiene costo");

    } else if (ps<=30){
        alert(" debe pagar 50000");

    } else if( ps<=40){
        alert("debe pagar 100000");

    } else{
        alert(" no se permite transportar maleta");

    }
}
// factura de compra
function facturaCompra (){
    let vlc,ds,vd,tt, iva;

    vlc=parseFloat(prompt(" ingrese el valor de la compra"));
    
    if ( vlc>=100000){
        if (vlc <= 299999){
            ds=vlc=0.05
            vd=vlc-ds
            iva=vd*0.18
            tt=(vlc-vd)+iva;
            alert(" ha recibido un descuento del 5%");

        }else if( vlc <=499999){
            ds=vlc*0.10;
            vd=vlc-ds
            iva =vd*0.18
            tt=(vlc-vd)+iva
            alert(" ha recibido un descuento del 10%");
        }else{
            ds=vlc*0.15;
            vd=vlc-ds
            iva =vd*0.18
            tt=(vlc-vd)+iva
            alert(" ha recibido un descuento del 15% ");
        }
        

    } else{
        alert(" no tiene descuento");
        iva=vlc*0.19;
        tt=vlc+iva;
    }

    alert(" el total a apagar es: "+ tt);

}
//sistema de calificacion de riesgo 

function calificacionDeRiesgo (){
    let inm, ed;
    ed=parseFloat(prompt(" ingresa tu edad"));

    if (ed>=18){
        inm= parseFloat(prompt("ingrese sus ingresos mensuales"));
        
        if(ed<25){
            if (inm>=2000000){
                alert(" es elegible");

            } else{
                alert(" no elegible");
            }
        }else if (ed>25){
            if(inm>=1500000){}
                alert(" es elegible");
            }else{
                alert(" no es elegible ");
            

        }
    
    }else{
        alert(" no es elegible");
    }
}

//mayor, menor o igualdad entre 3 numeros

function menorMayorIgualDeTresNumeros(){
    let n1, n2,n3;
    
    n1=parseFloat(prompt(" ingrese el primer numero "));
    n2=parseFloat(prompt(" ingrese el segundo numero "));
    n3=parseFloat(prompt(" ingrese el tercer numero "));
    

    if (n1==n2 || n1==n3){
        if ( n1<n2 && n1<n3){
            alert(" el numero menor es:"+n1);
        }else if ( n2<n1 && n2<n3){
            alert(" el numero menor es"+n2);

        }else{
            alert ( "el numero menor es"+n3);
        }
         if (n1>n2 && n1>n3){
            alert( "el numero mayor es"+ n1);
         } else if ( n2 > n1 && n2> n3){
            alert(" el numero mayor es:"+ n2);
         }else {
            alert("el numero mayor es"+n3);
         }
        alert(" hay  dos valores iguales");

    } else if ( n1>n2 && n1>n3){
        alert(" el mayor es:"+n1);
        if( n3<n1 && n3<n2){
        alert(" el menor es "+n3);
        }else if ( n2<n1 && n2<n3){
            alert(" el menor es "+ n2);
        }

    }else if( n3>n1 && n3>n2){
        alert(" el mayor es"+n3);
        if (n1<n2){
            alert("  el menor es "+n1)
        }else{
            alert(" el menor es "+n2)
        }
        
    }else if( n2>n1 && n2>n3){
        alert( " el mayor es "+n2);
        if( n3<n1){
            alert ("el menor es"+n3);

        }else{
            alert(" el menor es "+n1);
        }
    }
}
// mes 
function mes (){
    let mesn;
    mesn=parseFloat(prompt(" ingrese el numero del mes"));

    
    switch (mesn) {
    case 1:
     console.log( "enero");
     break;

    case  2:
     console.log( "febrero");
     break;

    case 3:
     console.log( "marzo");
     break;

    case 4:
     console.log(" abril ");
     break;

    case 5:
     console:log("mayo");
      break;
    case 6:
     console.log(" junio");
      break;
    case 7:
      console.log("julio");
     break;
    case 8:
     console.log(" agosto");
     break;
    case 9:
     console.log("septiembre");
     break;
    case 10:
     console.log(" octubre");
     break;
    case 11:
     console.log(" noviembre");
     break;
    case 12 :
     console.log( " diciembre");
     break;

    
    default:
       break;
    }
}

//contar numeros

function contadorNumeros(){
    let pntp, pntf;
pntp= parseFloat(prompt(" ingresa el punto de partida"));
pntf= parseFloat(prompt(" ingrea el numero final "));

while (pntp<=pntf) {
    console.log(" mostrando"+ pntp);
    pntp=pntp+1;

    
}


}
//  cuenta regresiva

function cuentaRegresiva(){
     let pntp, pntf;
pntp= parseFloat(prompt(" ingresa el punto de partida"));
pntf= parseFloat(prompt(" ingrea el numero final "));

while (pntp>=pntf) {
    console.log(" mostrando"+ pntp);
    pntp=pntp-1;


}
}

//numeros pares 

function numerosPares(){
    let nl,ni;
    ni=1
    nl=parseFloat(prompt(" ingrese el numero limite"));
    while( ni<=nl){
        if(ni%2==0){
            console.log(" mostrar"+ ni);
        }else {

        }
        ni=ni+1
    }

}
// numeros impares

function numerosImpares(){
    let ni,nl;
    ni=1
    nl=parseFloat(prompt(" ingresa el numero limite "));

    while( ni<=nl){
        if (ni % 2==0){

        }else{
            console.log(" mostrar "+ ni);

        }
        ni=ni+1
    }
}

//suma de numeros 

function sumaDeNumeros(){
    let ni,nl;
    let suma
    ni=1
    suma=0

    nl=parseFloat(prompt("ingresa un numero"));

    while( ni<nl){
        ni=ni+1
        suma = suma+ni
        console.log(" mostrando" +  suma );

    }
    console.log(" la suma de todos los numeros es:" + suma );
    

}
// tabla de multiplicar
function tablaDeMultiplicar (){
    let ni, n,r;
    ni=1
    n=parseFloat( prompt( " ingresa el numero a multiplicar"));
    while(ni<10){
        ni=ni+1
        r=n*ni
        console.log(" mostrar"+ n + "*"+ni+"="+r);

    }
}
// contar pares e impares
function contarParesImpares (){
    let nl , ni;
    let par= 0
    let imp=0
    
    nl= parseFloat(prompt( " ingresa el numero limite"));
     for (let ni= 1; ni< nl; ni++) {
        if( ni % 2==0){
            console.log(" mostrando par"+ni);
            par=par+1;

        
        
        } else{
        console.log(" mostrando impar" + ni);
        imp=imp+1;
        }

     

    }
 console.log(" el total de numeros impares es:" + imp + " y el total de numeros pares es" + par);

}

//promedio de numeros 

function promedioNumeros(){

    let i, cant, prom,n;
    let s=0
    cant= parseFloat(prompt(" cuantos numeros desea ingresar "));
    for ( let i=0; i< cant; i++){
        n=parseFloat(prompt(" ingrese un numero"));
        s = s+n

    }
    
    prom=s/cant
    console.log(" la cantidad de numeros ingresados es :" + cant);
    console.log(" la suma de los numeros ingresados es:" + s);
    console.log(" el promedio de los numeros ingresados es:" + prom);


}
// numero mayor 

function numeroMayor(){

    let cant,i,n;
    let nm=0;

    cant=parseFloat(prompt(" ingresa la cantidad de numeros que desea igresar"));

    for ( i=0; i< cant; i++){
        n=parseFloat(prompt(" ingresa un numero"));
        if (n>nm){
            nm=n
        }

    }
    console.log(" es numero mayor es:"+ nm);

}
//numero menor

function numeroMenor(){
    let cant, i, n, mn;
    cant= parseFloat(prompt(" ingrese la cantidad de numeros que desea ingresar"));
    mn=parseFloat(prompt("ingresa un numero"));

    for( i=0; i<cant; i++){
        n=parseFloat(prompt(" ingresa un numero"));
        if ( n<mn){
            mn=n
        }

    }
    console.log(" el numero menor es:"+mn);
}
// clasificacion de numeros

function clasificacionNumeros(){
    let i, can, n;
    ni=0;
    can=parseFloat(prompt("ingrese la cantidad de numeros que desea ingresar"));
    
    for ( i=0; i<can ; i++){
        n=parseFloat(prompt(" ingresa un numero"));
        if ( n>ni){
            console.log(" el numero " + n +" es positivo");


        }else if(n==0){
            console.log(" el numero " + n + " es igual a 0");
        }else{
            console.log(" el numero " + n + " es negativo");
        }
    }
}

// estadisticas de ventas
function estadisticasVentas(){
 
let cant,i,v,prom,vm,vmn;
cant= parseFloat(prompt(" ingresa la cantidad de ventas del dia"));
sum=0;
vm=0;
for( i =0 ; i<cant; i++){
    v=parseFloat(prompt("ingresa el valor de un producto"));
    sum=sum+v
    if( v>vm){
        vm=v

    }else{
        vmn=v
    }
    
    
    
}
 prom= sum/cant

 console.log(" el presio mas alto es:"+ vm);
    console.log(" el presio mas bajo es:"+ vmn);
    console.log(" el total de ventas es:"+ sum);
    console.log( " el promedio de las ventas es:"+ prom);

}

// ingresa numeros hasta 0

function ingresaNumerosHasta0(){

    let i=0;
    let prom=0;
    let n=1;
    let sum=0
    while ( n!= 0){
        n= parseFloat(prompt(" ingrese un numero "));
        sum=sum+n
        if (n!=0){
            i++

        }else{
            prom =sum/i

            console.log(" la cantidad de los numeros ingresados es" +i);
            console.log(" la suma de los numeros ingresados es :"+ sum);
            console.log(" el promedio de los numeros ingresados es:"+ prom);

        }
    }
}
// validacion de contraseña
function validacionContraseña(){
     
    let ing=0
    let con= "juan123";

    while( ing!= con){
        ing=prompt(" ingrese l acontraseña");
        if( ing==con){
            alert(" contraseña correcta");
        }else {
            alert(" contraseña incorrecta");
        }
    }


 
}

//menu de opciones

function menuDeOpciones(){

    let n=0;

    console.log(" bienvenido a nuestro menu de opciones.");
    console.log(" 1: mostrar mensaje.  2: mostrar informacion.  3: realizar una operacion. 4:salir ");

    while( n!=4){
        
        n=parseFloat(prompt("marca la opcion que necesites"));

        if ( n==1){
            alert(" bienvenido");

        }else if( n==2){
            alert("Cristiano Ronaldo: Máximo goleador histórico del fútbol mundial, ganador de 5 Balones de Oro y múltiple campeón de la Champions League con el Real Madrid.")

        } else if( n==3){
            alert("1+1=3");
        }else if(n==4){
            alert(" salio del sistema");
        }else{
            alert(" numero incorrecto vuelva a intentar");
        }
    }
}
//cajero automatico


function cajeroAutomatico(){

    let sinc=500000;
    let n;
    let vr=0;
    let vd=0;

    console.log("menu de opciones");
    console.log(" 1)Consultar saldo.   2)Retirar dinero.  3) Depositar dinero.  4) Salir.");

    while( n!=4){
        n= parseFloat(prompt(" selecciona un numero"));
        if (n==1){
           alert(" saldo:"+ sinc);

        }else if(n==2){
            vr=parseFloat(prompt(" ingrese el valor que desea retirar"));
            if(vr>sinc){
                alert("saldo insuficiente");

        
            }else{
                alert(" retiro exitoso");
            }
            sinc=sinc-vr
        }else if ( n==3){
            vd=parseFloat(prompt(" ingrese el valor que desea depositar"));
            if( vd<10000){
                alert("no se permite depisito");

            }else{
                alert(" deposito exitoso");

            }
            sinc=sinc+vd

        }else if ( n==4){
            alert(" el proceso termino");
            alert(" no olvide retirar su tarjeta ");
        }else{
            alert("numero incorrecto vuelva a intentar");
        }

    }
    
    alert(" el saldo es: "+ sinc );
}

// sistema de notas

function sistemaNotas(){

    let cant, nt,i;
    let ca=0;
    let cr=0;
    let prom=0;
    let suma=0;
    let nmn=50;
    let nm=10;

    cant=parseFloat(prompt(" ingresa la cantidad de estudiantes a evaluar"));

    for( i=0 ; i<cant; i++){
        nt=parseFloat(prompt(" ingresa la nota final "));
        

        if( nt>=30){
            console.log(" el estudiante aprueba");

            ca=ca+1
            
        }else{
            console.log(" el estudiante reprueba");
            cr=cr+1
        }

        suma= suma+nt

        if(nt<nmn){
            nmn=nt
        }else if ( nt>nm){
            nm=nt
        }

        

    
    }

    prom=suma/cant

    alert(" la cantidad de estudiantes es:"+ cant);
    alert(" el promedio de las notas ingresadas es:" + prom);
    alert("la cantidad de estudiantes reprobados es: " +cr);
    alert(" la cantidad de estudiantes aprobados es:" + ca);
    alert(" la nota mas baja es:" + nmn);
    alert(" la nota mas alta es :" + nm);
}

//adivinar el numero

function  adivinarNumero(){

    let ns=77;
    let n;
    while(n!=ns){
        n=parseFloat(prompt(" ingrese un numero"));

       if( n>ns){
        console.log("  el numero es menor");

       }else if ( n==ns){
        alert(" adivinaste el numero ");

       } else{
        console.log(" el numero es mayor ");

       }
    }
}
//registro de productos

function registroProductos(){

    let cant,i;
    let nm;
    let prc;
    let cp=0;
    let cnt=0;
    let vt=0;
   let pmy=0;
   let pmn=50000; 
   let ct=0;
   
    cant=parseFloat(prompt(" ingresa la cantidad de productos"));


    for(i=0; i<cant; i++){
        nm=prompt(" dame el nombre del producto ");
        prc=parseFloat(prompt(" ingresa el precio del producto "));
        cp= parseFloat(prompt( " ingresa la cantidad de producto "));
        vt=vt+prc
        ct=vt*cp
        cnt=cnt+ct

        if( prc>pmy){
            pmy=prc
        }else if ( prc<pmn){
            pmn=prc

        }



    }
    alert(" la cantidad de productos regitrados es:" + cant);
    alert(" el valor tortal del inventario  es: " + cnt);
    alert(" el producto con mayor precio es:" + pmy );
    alert(" el prducto con menor precio es: " + pmn);

}
//acumulador hasta alcanzar un limite


function acumulador(){
    

    let ni;
    let sum= 0;
    let prom;
    let i=0;

    while ( sum < 100){
        ni=parseFloat(prompt( "ingresa un numero para sumar" ));
        sum=sum+ni
        i++

        
    }
    prom= sum/i
    alert(" la cantidad de numeros ingresados es:"+ i);
    alert(" el promedio de los numeros ingresados es:" + prom);
    alert(" la suma de los numeros ingresados es:" + sum);
}

// sistemas de notas 

function sistemaNotas(){

    let i,cant,nt;
    let ca=0;
    let cr=0;
    let prom;
    let sum=0;
    let nm= 10;
    let nmn=50;

    cant= parseFloat(prompt(" ingrese la cantidad de estudiantes "));


    for ( i=0; i<cant; i++){
        nt=parseFloat(prompt(" ingrese la nota final "));

        if (nt>=30){
            alert(" el estuiante aprueba ");
            ca=ca+1

        }else{
            alert(" el estudiante reprueba");
            cr=cr+1
        }

        sum=sum+nt

        if (nt>nm){
            nm=nt
        } else if (nt<nmn ){
            nmn=nt
        }
    }

    prom=sum/cant

    alert(" la cantidad de esrudiantes es:" + cant);
    alert(" el promedio de notas del grupo es:" + prom);
    alert(" la cantidad de estudiantes aprobados es: "+ ca);
    alert(" la cantidad de estudiantes reprobados es:" + cr);
    alert( " la nota mas baja es:" + nmn);
    alert(" la nota mas alta es:" + nm);

}

// sistema de compras 
 function sistemaCompras(){

    let preg=0;
    let  prc, cant; 
    let subt=0;
    let dsc=0;
    let tp,prec;
    let cntp=0;

    let iva;
    let nprd;
    
    while ( preg!= 2){
        nprd= prompt(" ingrese el nombre del producto ");
        prc= parseFloat(prompt(" ingrese el precio del producto"));
        cant= parseFloat(prompt( "ingrese la cantidad del producto"));
        console.log(" ¿desea ingresar otro producto?");
        console.log(" 1)si.  2)no. ");

        preg=parseFloat(prompt("ingrese el numero para marcar su respuesta"));

        prec=prc*cant
        subt=subt+prec
        cntp=cntp+1
    }

    if( subt<=100000){
        alert(" no hay descuento ");

    }else if ( subt<=300000){
        alert( "aplica descuento del 5%");
        dsc=(sub*5)/100
    }else if ( subt<=500000){
        alert(" aplica descuento del 10%");
        dsc=(subt*10)/100
    }else if ( subt>500000){
        alert("aplica descuento del 15 %");
        dsc=(subt*15)/100



    }
    
    iva=(subt-dsc)*0.19
    tp=(subt-dsc)+iva
    alert( " el subtotal de la compra es " + subt);
    alert(" el descuento hecho es de:" + dsc);
    alert(" el valor agregad por el iva fue :" + iva);
    alert(" el total a pagar es:" + tp);
    alert(" la cantidad de productos ingresados es:" + cntp);


 
 }
 