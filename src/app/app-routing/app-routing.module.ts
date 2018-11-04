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
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produtos/create',
    component: fieldsComponent
  },
  {
    path: 'produtos/edit/:id',
    component: fieldsComponent
  },
  {
    path: 'fornecedores',
    component: FornecedoresComponent
  },
  {
    path: 'fornecedores/create',
    component: FieldsSuppliersComponent
  },
  {
    path: 'fornecedores/edit/:id',
    component: FieldsSuppliersComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'usuarios/create',
    component: FieldsUsersComponent
  },
  {
    path: 'usuarios/edit/:id',
    component: FieldsUsersComponent
  },
  {
    path: 'usuario/create',
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
