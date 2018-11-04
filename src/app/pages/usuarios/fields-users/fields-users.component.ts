import { UsuariosService } from './../../../services/usuarios/usuariosService';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fields-users',
  templateUrl: './fields-users.component.html',
  styleUrls: ['./fields-users.component.css']
})
export class FieldsUsersComponent implements OnInit {

  user:any = {};

  constructor(private usersService: UsuariosService,
              private router : Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] != null){
        this.open(+params["id"]);
      }
    });
  }

  open(id: number){
    this.usersService.getById(id).subscribe(q => {
      this.user = q[0];
    });
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

    if(this.user.id){
      this.usersService.put(this.user).subscribe(q => {
        swal('Criação', `Usuário alterado com sucesso.`, 'success');
        this.router.navigate(['/usuarios']);
        return;
      }, err => {
      });
    } else {
      this.usersService.post(this.user).subscribe(q => {
        swal('Criação', `Usuário criado com sucesso.`, 'success');
        this.router.navigate(['/usuarios']);
        return;
      }, err => {
      });
    }   
  }
}
