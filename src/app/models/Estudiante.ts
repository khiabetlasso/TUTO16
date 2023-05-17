export class Estudiante {
    nombre: string;
    apellido: string;
    cedula: string;
    estado: boolean;
    fecha: Date;

    constructor(nombre: string, apellido: string, cedula: string, estado: boolean, fecha: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula
        this.estado = estado;
        this.fecha = fecha;
    }
}