import { Router } from '@angular/router';
import { UsuariosService } from './../../services/usuarios/usuariosService';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users:any = [];
  constructor(private usersService: UsuariosService,
              private router : Router) { }

  ngOnInit() {
    this.searchUsers();
  }

  searchUsers(){
    this.usersService.getAll().subscribe(q => {
      this.users = q;
      console.log(this.users);
    });
  }

  open(item: any){
    this.router.navigate(['/usuarios/edit/', item.id]);
  }

  delete(item: any){
    this.usersService.delete(item.id).subscribe(q => {
      swal('Sucesso', 'Registro excluído com sucesso!', 'success');
      this.searchUsers();
    });
  }
}
