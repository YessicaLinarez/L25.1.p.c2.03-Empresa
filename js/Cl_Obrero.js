
import Cl_Persona from "./Cl_Persona.js";

export default class Cl_Obrero extends Cl_Persona{
    constructor(cedula, edad, cntHijos){
    super(cedula, edad)
    this.cntHijos=cntHijos
    }
    bono(){
    return this.cntHijos<3 ? 50 : 70
    }
    sueldo(){
    return this.sueldoBase() + this.bono()
    }
    }