/*

*/

class Bascula{
    pesos= null;
    alturas = null;
    fechas =null;
    anotaciones=-1;
    imc=-1;

    /**
     * Constructor sin parámetros que devuelve un nuevo objeto Báscula.
     */
    constructor()
    {
        this.pesos=new Array();
        this.alturas=new Array();
        this.fechas=new Array();
        this.anotaciones=0;
    }

    /**
     * Método textual que recibe un valor de índice de masa corporal (imc) y devuelve su descripción textual equivalente:
     * imc inferior a 16: Infrapeso (delgadez severa).
     * imc entre 16–17: Infrapeso (delgadez moderada).
     * imc entre 17-18.5: Infrapeso (delgadez aceptable).
     * imc entre 18.5-25: Peso normal.
     * imc entre 25-30: Sobrepeso.
     * imc entre 30-35: Obeso (Tipo I).
     * imc entre 35-40: Obeso (Tipo II).
     * imc superior a 40: Obeso (Tipo III).
    */
  

    static describirIMC(imc)
     {
       if (imc < 16)
         return "<16.00: Infrapeso (delgadez severa)";
       else if (imc >= 16 && imc < 17)
         return "16.00 – 16.99: Infrapeso (delgadez moderada)";
       else if (imc >= 17 && imc < 18.5)
         return "17.00 - 18.49: Infrapeso (delgadez aceptable)";
       else if (imc >= 18.5 && imc < 25)
         return "18.50 - 24.99: Peso normal";
       else if (imc >= 25 && imc < 30)
         return "25.00 - 29.99: Sobrepeso";
       else if (imc >= 30 && imc < 35)
         return "30.00 - 34.99: Obeso (Tipo I)";
       else if (imc >= 35 && imc <= 40)
         return "35.00 - 40.00: Obeso (Tipo II)"; 
       else if (imc > 40)
         return ">40.00: Obeso (Tipo III)";  
     }

    /**
     * Devuelve el número de pesajes que ha registrado la báscula.
     */

    obtenerNumeroAnotaciones(){

        return this.anotaciones;
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
      if (this.pesos.length == 0){
        return 0;
       } 
       else {
        var m=Math.max.apply(null,this.pesos);
       return m; 
    }
  }
    /*
    * Devuelve el menor de los pesos que tiene registrados la Báscula.
    */
    
    obtenerPesoMinimo()
    {
      if (this.pesos.length == 0)
        return 0;
      else
          return Math.min.apply(null,this.pesos);
    }
  

    /*
    *Calcula el Índice de Masa Corporal (IMC) tomando como referencia el peso y altura de la última anotación. Sabiendo que:
    *IMC = peso / altura 2
    */

    calcularIMC()
    {
      /*if(this.anotaciones<0){
        var res=-1;
        var imc=Number(res);
        return imc;
      } else{*/
        const lp = this.pesos[this.pesos.length-1];
        const la = this.alturas[this.alturas.length-1];
        var imc=lp/Math.pow(la,2) ;
          return imc.toFixed(2);
      //}
      
      
      
      
    } 

    

    obtenerPesos()
    {
      return this.pesos;
    }
    obtenerAlturas(){
      return this.alturas;
    }
    obtenerUltimoPeso(){
      return this.pesos[this.pesos.length-1];
    }
    obtenerimc(){
      return describirIMC();
    }

}

module.exports=Bascula;