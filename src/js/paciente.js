const Bascula=require('./bascula');

/**
 * Clase Paciente
 * @author: Pablo Plaza Quesada
 */

class Paciente{
    nombre= null;
    apellidos = null;
    fechanacimiento =null;
    registroBascula=null;

    /**
     * construye un nuevo objeto Paciente a partir de su nombre, apellidos y fecha de nacimiento.
     */
    constructor(nom,ape,fec)
    {
        this.nombre=nom;
        this.apellidos=ape;
        this.fechanacimiento=fec;
        this.registroBascula=new Bascula();
        
    }

    /**
     * saludar(): Devuelve una cadena personalizada con el nombre y apellidos del paciente: “Hola soy ...” .
     */

    saludar(){

        return "Hola soy "+this.nombre+" "+this.apellidos;
    } 
    /**
     * obtenerNombre(): Devuelve el nombre del paciente.
     */
    obtenerNombre(){
        return this.nombre;
   
    }
    /*
    * modificarNombre(nombre): Permite modificar el nombre del paciente.
    */

    modificarNombre(nombre){
        this.nombre=nombre;
    }
    
    /*
    * obtenerApellidos(): Devuelve los apellidos del paciente.
    */
    
    obtenerApellidos(){
        return this.apellidos;
    }

    /*
    *modificarApellidos(apellidos): Permite modificar los apellidos de los pacientes.
    */

    modificarApellidos(apellidos){
        this.apellidos=apellidos;
        
    } 

    /*
    *obtenerFechaNacimiento: Devuelve la fecha de nacimiento del paciente.
    */

    obtenerFechaNacimiento(){
        return this.fechanacimiento;             
    }

    /*
    *modificarFechaNacimento(fecha): Permite modificar la fecha de nacimiento del paciente.
    */

    modificarFechaNacimento(fecha){
        this.fechanacimiento=fecha;          
    }

    /*
    *obtenerEdad(): Calcula la edad del paciente, tomando como referencia su fecha de nacimiento y la fecha actual.
    */

    obtenerEdad(){
        nac=this.fechanacimiento;
        anac=nac.getFullYear();
        act=new Date();
        aact=act.getFullYear();
        edad=aact-anac;
        return edad;
               
    }

    /*
    *modificarBascula(bascula): Permite modificar la báscula asociada al paciente.
    */

    modificarBascula(bascula){
        this.registroBascula=bascula;       
    }

    /*
    *obtenerBascula(): Devuelve la báscula asociada al paciente.
    */

    obtenerBascula(){
        return this.registroBascula;            
    }

    /*
    *calcularIMC(): Devuelve el Índice de Masa Corporal del paciente, para ello este método envía un mensaje al método ofrecido por 
    *la báscula que será el que realice el cálculo.
    */

    calcularIMC(){
        return this.registroBascula.calcularIMC();          
    }

}

module.exports=Paciente;