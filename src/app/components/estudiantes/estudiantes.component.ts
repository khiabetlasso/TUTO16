import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  nombre = "";
  apellido="";
  cedula="";
  fecha= new Date();
  listEstudiante: Estudiante[] = [];

  ngOnInit(): void {

  }
  agregarEstudiante():void {
    const estudiante: Estudiante = {
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      estado: false,
      fecha: this.fecha
    }

    this.listEstudiante.push(estudiante);

    this.nombre='';
    this.apellido='';
    this.cedula='';
    this.fecha= new Date();

  }

  eliminarEstudiante(indice:number):void{
    this.listEstudiante.splice(indice,1);

  }

  actualizarEstudiante(estudiante:Estudiante, indice:number){
    console.log(estudiante);
    this.listEstudiante[indice].estado=!estudiante.estado;

  }
}
