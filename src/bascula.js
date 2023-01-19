/*

*/

class Bascula{
    pesos= null;
    alturas = null;
    fechas =null;
    anotaciones=-1;

    /**
     * Constructor sin parámetros que devuelve un nuevo objeto Báscula.
     */
    constructor()
    {
        this.pesos=new Array();
        this.alturas=new Array();
        this.fechas=new Array()
        this.anotaciones=0;
    }

    /**
     * Devuelve el número de pesajes que ha registrado la báscula.
     */

    obtenerNumeroAnotaciones(){

        return this.anotaciones
    } 
    /**
     * Permite anotar un nuevo peso, es obligatorio proporcionar un peso (en kg.) 
     * También, es posible indicar una altura (en caso de omitir este valor se tomará el valor uno, por defecto), 
     * así como la fecha de la pesada, (en caso de no indicar fecha, adoptará la del día actual).
     */
    anotarPeso(p,a=1,f=new Date()){
        this.pesos.push(p);
        this.alturas.push(a);
        this.fechas.push(f);
        this.anotaciones++;
   

    }
    /*
    * Devuelve el mayor de los pesos que tiene registrados la Báscula.
    */

    obtenerPesoMaximo(){
        return this.pesos.Array.max()
    }
    
    /*
    * Devuelve el menor de los pesos que tiene registrados la Báscula.
    */
    
    obtenerPesoMinimo(){
        return this.pesos.Array.min()
    }

    /*
    *Calcula el Índice de Masa Corporal (IMC) tomando como referencia el peso y altura de la última anotación. Sabiendo que:
    *IMC = peso / altura 2
    */

    calcularIMC(p,a){
        up=p.slice(-1);
        ua=a.slice(-1);
        imc=up/Math.pow(ua,2);
        return imc
    } 

    /*
    *Método textual que recibe un valor de índice de masa corporal (imc) y devuelve su descripción textual equivalente:
    *imc inferior a 16: Infrapeso (delgadez severa).
    *imc entre 16–17: Infrapeso (delgadez moderada).
    *imc entre 17-18.5: Infrapeso (delgadez aceptable).
    *imc entre 18.5-25: Peso normal.
    *imc entre 25-30: Sobrepeso.
    *imc entre 30-35: Obeso (Tipo I).
    *imc entre 35-40: Obeso (Tipo II).
    *imc superior a 40: Obeso (Tipo III).
    */

    describirIMC(imc){
    switch(imc){
        case imc<16:
            calificacion = "Infrapeso (delgadez severa)";
              break;
            case imc>16 && imc<17:
            calificacion = "Infrapeso (delgadez moderada)";
            break;
            case imc>17 && imc<18.5:
            calificacion = "Infrapeso (delgadez aceptable)";
              break;
            case imc>18.5 && imc<25:
            calificacion = "Peso normal";
              break;
            case imc>25 && imc<30:
            calificacion = "Sobrepeso";
              break;
            case imc>30 && imc<35:
            calificacion = "Obeso (Tipo I)";
              break;
            case imc>35 && imc<40:
              calificacion = "Obeso (Tipo II)";
              break;
              case imc<40:
              calificacion = "Obeso (Tipo III)";
              break;
                   }        
                   return calificacion              

    }

}

module.exports=Bascula;