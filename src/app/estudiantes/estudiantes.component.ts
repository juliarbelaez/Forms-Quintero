import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent {
  estudiantesForm: FormGroup;

  idControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(10),
  ]);
  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
    this.estudiantesForm = new FormGroup({
      id: this.idControl,
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
    });
  }
  onSubmit(): void {
    if (this.estudiantesForm.value) {
      console.log(this.estudiantesForm);
    } else {
      alert('No es válido');
    }
  }
}
