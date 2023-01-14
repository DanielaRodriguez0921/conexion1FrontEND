import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url = 'http://localhost:4000/api/usuarios';
  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(this.url + '/');
  }

  saveUsers(user: any) {
    return this.http.post(this.url + '/crear', user);
  }

  updateUser(user: any) {
    return this.http.post(this.url + '/actualizar', user);
  }

  deleteUser(data: any) {
    return this.http.post(this.url + '/eliminar', data);
  }
}
