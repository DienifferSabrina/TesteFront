import { Router } from '@angular/router';
import { LoginService } from './../../services/login/loginService';
import { LoginModel } from './../../model/loginModel';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new LoginModel();
  userLogged: any = [];
  error: String = "";

  constructor(private loginService: LoginService,
    private router : Router) { }

  ngOnInit() {
  }

  submitLogin(user: LoginModel){
    this.error = '';
    this.loginService.logar(user).subscribe(q => {
      this.userLogged = q;
      if(this.userLogged.length > 0){
        if(this.userLogged[0].senha == user.senha){
          this.router.navigate(['/produtos']);
        } else {
          swal('Validação', 'Senha incorreta.', 'warning');
          return false;
        }
      } else {
        swal('Validação', 'Usuário não encontrado.', 'warning');
        return false;
      }
    }, error => {
      try {
        this.error = error.json().message.userMessage;
      } catch (err) {
        this.error = "Aconteceu algum erro, tente novamente!";
      }
    });
  }
}
