import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstName : String = '';
  lastName : String = '';
  email : String = '';
  password : String = '';


  onRegister() {
    // Lógica para manejar el registro
    console.log('Registro exitoso', { firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password });
  }

  goToLogin() {
    // Lógica para redirigir al inicio de sesión
    console.log('Redirigiendo al inicio de sesión');
  }

}
