import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  messages: Message[] = [];

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.exists) {
          this.messageService.add({
            severity: 'success',
            summary: 'Login exitoso',
            detail: 'redireccionando a la página principal...',
            life: 3000 // Mensaje desaparecerá después de 3 segundos
          });
          this.authService.saveToken(response.token);
          setTimeout(() => {
            this.router.navigate(['/auth/crud']).then(success => {
              if (!success) {
                console.error('Error al navegar a la ruta /auth/crud');
              }
            });            
          }, 3000);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error de autenticación',
            detail: 'Usuario o contraseña incorrectos.',
            life: 3000 // Mensaje desaparecerá después de 3 segundos
          });
        }
      },
      error: (err) => {
        console.error('Error de autenticación:', err);
        alert('Credenciales inválidas');
      },
    });
  }

}
