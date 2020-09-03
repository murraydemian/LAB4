import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  nombre : string = '';
  apellido : string = '';
  legajo : string = '';
  materia : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
