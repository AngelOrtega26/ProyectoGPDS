import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.css'],
  providers: [MessageService]
})
export class CrudUsuariosComponent {
  
  users :any[] = [];
  showModal: boolean = false;
  isEditing: boolean = false;
  currentUser = { id: null, nombre: '', apellido: '', correo: '', contrasena: '' };

  constructor(private authService: AuthService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.fetchUsers(); // Llamar al método que obtiene los usuarios
  }

  showCreateUserModal(): void {
    this.isEditing = false; // Modal en modo creación
    this.currentUser = { id: null, nombre: '', apellido: '', correo: '', contrasena: '' };
    this.showModal = true; // Mostrar modal
  }

  showEditUserModal(user: any): void {
    this.isEditing = true; // Modal en modo edición
    this.currentUser = user; // Copiar datos del usuario actual
    this.showModal = true; // Mostrar modal
  }

  createOrUpdate() : void {
    this.isEditing ? this.updateUser() : this.createUser();
  }

  createUser(): void {
    this.authService.createUser(this.currentUser).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Usuario creado con éxito',
          life: 3000 // Mensaje desaparecerá después de 3 segundos
        });
        this.fetchUsers(); // Refrescar lista de usuarios
        this.showModal = false; // Cerrar modal
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error,
          life: 3000 // Mensaje desaparecerá después de 3 segundos
        });
        console.error('Error al crear usuario:', err);
      }
    });
  }

  onDeleteUser(user: any): void {
    const confirmed = confirm(`¿Estás seguro de que deseas eliminar a ${user.nombre}?`);
    if (confirmed) {
      this.authService.deleteUser(user.id_usuario).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Usuario eliminado con éxito',
            life: 3000 // Mensaje desaparecerá después de 3 segundos
          });
          this.fetchUsers(); // Refrescar lista
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error,
            life: 3000 // Mensaje desaparecerá después de 3 segundos
          });
        }
      });
    }
  }

  fetchUsers(): void {
    this.authService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data; // Asignar los usuarios obtenidos a la lista
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }

  updateUser(): void {
    this.authService.updateUser(this.currentUser).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Usuario editado con éxito',
          life: 3000 // Mensaje desaparecerá después de 3 segundos
        });
        this.fetchUsers(); // Refrescar lista de usuarios
        this.showModal = false; // Cerrar modal
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err,
          life: 3000 // Mensaje desaparecerá después de 3 segundos
        });
      }
    });
  }

  // Método de logout
  logout() {
    this.authService.logout();
  }

}
