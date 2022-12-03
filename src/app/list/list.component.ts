import { Component } from '@angular/core';
import { Alumnos } from '../models/student.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  alumnos: Alumnos[] = [
    new Alumnos(1, 'Micaela', 'Lopez', 9),
    new Alumnos(2, 'Martin', 'Gomez', 4),
    new Alumnos(3, 'Lola', 'Perez', 1),
    new Alumnos(4, 'Nicolas', 'Gutierrez', 7)
  ]
}
