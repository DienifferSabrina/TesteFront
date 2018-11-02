import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importação das classes para fazer as rotas
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';

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
	}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }