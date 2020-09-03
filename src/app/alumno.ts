export class Alumno {
    nombre : string;
    apellido : string;
    legajo : number;
    materia : string;

    constructor(_nombre : string, _apellido : string, _legajo : number, _materia : string){
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.legajo = _legajo;
        this.materia = _materia;
    }
}
