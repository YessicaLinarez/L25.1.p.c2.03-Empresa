class Cl_persona{
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