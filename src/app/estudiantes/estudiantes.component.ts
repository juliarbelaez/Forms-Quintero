import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent {
  estudiantes: any[] = [];
  estudiantesForm: FormGroup;

  idControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(10),
  ]);
  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  cursoControl = new FormControl('', Validators.required);

  constructor() {
    this.estudiantesForm = new FormGroup({
      id: this.idControl,
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      curso: this.cursoControl,
    });
  }
  onSubmit(): void {
    if (this.estudiantesForm.valid) {
      this.estudiantes.push(this.estudiantesForm.value);
      this.estudiantesForm.reset();
    } else {
      this.estudiantesForm.markAllAsTouched();
      alert('No es válido');
    }
  }
}
