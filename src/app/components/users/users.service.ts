import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url = '';
  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(this.url);
  }

  saveUsers(user: any) {
    return this.http.post(this.url + '/crear', user);
  }

  updateUser(user: any) {
    return this.http.put(this.url + '/actualizar', user);
  }

  deleteUser(id: any) {
    return this.http.delete(this.url + '/eliminar/' + id);
  }
}
