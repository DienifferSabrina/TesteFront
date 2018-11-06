import { Router, ActivatedRoute } from '@angular/router';
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
  pages = [];
  actualPage;

  constructor(private usersService: UsuariosService,
              private router : Router,
              private activatedRoute: ActivatedRoute
            ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.actualPage = params['page'] || 1);
    this.searchUsers();
  }

  searchUsers(){
    this.usersService.getAll(this.actualPage).subscribe(q => {
      this.users = q.data;
      this.actualPage = q.pageActual;
      for (let index = 1; index <= q.pages; index++) {
        this.pages.push(index);
      }
    });
  }

  setPage(page) {
    this.actualPage = page;
    this.router.navigate(['/produtos', page]);
    this.usersService.getAll(this.actualPage).subscribe(q => {
      this.users = q.data;
      this.actualPage = q.pageActual;
    });
  }

  open(item: any){
    this.router.navigate(['/usuario/edit/', item.id]);
  }

  delete(item: any){
    this.usersService.delete(item.id).subscribe(q => {
      swal('Sucesso', 'Registro excluído com sucesso!', 'success');
      this.actualPage = 1;
      this.router.navigate(['/usuarios/1']);
      this.users.getAll(this.actualPage).subscribe(q => {
        this.users = q.data;
        this.actualPage = q.pageActual;
      });
    });
  }
}
