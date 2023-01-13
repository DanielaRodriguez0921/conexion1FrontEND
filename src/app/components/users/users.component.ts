import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersForm: FormGroup = new FormGroup({});
  constructor(readonly formBuilder: FormBuilder, readonly userservice: UsersService) {

  }

  user: any = {};
  public users = [
    {
      id: 1,
      nombre: 'daniel',
      apellido: 'rodriguez',
      telefono: '324578'
    },
    {
      id: 1,
      nombre: 'Agustin',
      apellido: 'rodriguez',
      telefono: '324578'
    },
    {
      id: 1,
      nombre: 'daniel',
      apellido: 'rodriguez',
      telefono: '324578'
    }
  ];
  isUpdate: boolean = false;

  ngOnInit(): void {
    this.listUser();
    this.initForm();
  }

  initForm() {
    this.usersForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  listUser() {
    this.userservice.getUsers().subscribe((res: any) => { console.log(res); this.users = res; });
  }

  saveUser() {
    this.isUpdate = true;
    const data = this.createEntity();
    this.userservice.saveUsers(data).subscribe(res => { console.log(res); this.listUser() });
  }

  updateUser() {
    this.isUpdate = false;
    const data = this.createEntity();
    this.userservice.updateUser(data).subscribe(res => { console.log(res); this.listUser() });
  }

  deleteUser() {
    this.userservice.deleteUser(this.user.id).subscribe(res => { console.log(res); this.listUser() });
  }

  selectUser(user: any) {
    this.user = null;
    this.user = user;
    this.usersForm.patchValue(
      {
        nombre: this.user.nombre,
        apellido: this.user.apellido,
        telefono: this.user.telefono
      }
    )
  }
  refreshModal() {
    this.usersForm.patchValue(
      {
        nombre: '',
        apellido: '',
        telefono: ''
      }
    )
  }

  createEntity() {
    if (this.isUpdate) {
      const data = {
        nombre: this.usersForm.value.nombre,
        apellido: this.usersForm.value.apellido,
        telefono: this.usersForm.value.telefono
      }
      return data;
    } else {
      const data = {
        id: this.user.id,
        nombre: this.usersForm.value.nombre,
        apellido: this.usersForm.value.apellido,
        telefono: this.usersForm.value.telefono
      }
      return data;
    }

  }


}
