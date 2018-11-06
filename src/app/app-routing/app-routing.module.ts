import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importação das classes para fazer as rotas
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { ProdutosComponent } from '../pages/produtos/produtos.component';
import { fieldsComponent } from '../pages/produtos/fields/fields.component';
import { FornecedoresComponent } from '../pages/fornecedores/fornecedores.component';
import { FieldsUsersComponent } from './../pages/usuarios/fields-users/fields-users.component';
import { UsuariosComponent } from './../pages/usuarios/usuarios.component';
import { FieldsSuppliersComponent } from './../pages/fornecedores/fields-suppliers/fields-suppliers.component';
import { CreateUserComponent } from './../pages/login/create-user/create-user.component';


const routes: Routes = [
	{
		path: '',
		// direciona a rota Busca por periodo e tipo como padrão
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'produtos/:page',
    component: ProdutosComponent
  },
  {
    path: 'produto/create',
    component: fieldsComponent
  },
  {
    path: 'produto/edit/:id',
    component: fieldsComponent
  },
  {
    path: 'fornecedores/:page',
    component: FornecedoresComponent
  },
  {
    path: 'fornecedor/create',
    component: FieldsSuppliersComponent
  },
  {
    path: 'fornecedor/edit/:id',
    component: FieldsSuppliersComponent
  },
  {
    path: 'usuarios/:page',
    component: UsuariosComponent
  },
  {
    path: 'usuario/create',
    component: FieldsUsersComponent
  },
  {
    path: 'usuario/edit/:id',
    component: FieldsUsersComponent
  },
  {
    path: 'usuario/create/login',
    component: CreateUserComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
