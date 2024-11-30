import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Disponible globalmente. Si es exclusivo, cámbialo al módulo correspondiente.
})
export class AuthService {
  
  private readonly apiUrl = 'http://localhost:8080/api'; // Ajusta la URL a tu backend

  constructor(private http: HttpClient, private router : Router) {}

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correo, contrasena });
  }

  // Método para guardar el token (puedes adaptarlo a tu implementación)
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para obtener el token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para hacer logout
  logout(): void {
    localStorage.removeItem('authToken'); // Elimina el token de almacenamiento
    this.router.navigate(['/auth/login']); // Redirige al login
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.getToken() !== null; // Retorna true si hay un token
  }

  //___________________________________________USUARIOS
  // Obtener usuarios
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/users');
  }

  // Crear un nuevo usuario
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/users', user);
  }

  // Actualizar un usuario existente
  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${user.id_usuario}`, user);
  }

  // Eliminar un usuario
  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`);
  }

}
