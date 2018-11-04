import { Router } from '@angular/router';
import { UsuariosService } from './../../../services/usuarios/usuariosService';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user:any = {};

  constructor(private usersService: UsuariosService,
              private router : Router) { }

  ngOnInit() {
  }

  submit(){
    if(!this.user.nome){
      swal('Validação', 'Por favor, preencha o nome do usuário.', 'warning');
			return false;
    }

    if(!this.user.email){
      swal('Validação', 'Por favor, preencha o email do usuário.', 'warning');
			return false;
    }

    if(!this.user.login){
      swal('Validação', 'Por favor, preencha o login do usuário.', 'warning');
			return false;
    }

    if(!this.user.senha){
      swal('Validação', 'Por favor, preencha a senha do usuário.', 'warning');
			return false;
    }

    this.usersService.post(this.user).subscribe(q => {
      swal('Criação', `Usuário criado com sucesso.`, 'success');
      this.router.navigate(['/login']);
      return;
    }, err => {
    });
     
  }

}
