export default class Cl_Persona {
    constructor(cedula, edad){
    this.cedula=cedula
    this.edad=edad
    }
    esMayorDeEdad(){
    return this.edad>=18
    }
    sueldoBase(){
    return 150
    }
    }