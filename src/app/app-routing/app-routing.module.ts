import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importação das classes para fazer as rotas
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { ProdutosComponent } from '../pages/produtos/produtos.component';
import { fieldsComponent } from '../pages/produtos/fields/fields.component';

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
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
