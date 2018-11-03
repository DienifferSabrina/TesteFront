import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

/** rotas */
import { AppRoutingModule } from './app-routing/app-routing.module';

/** pages */
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { fieldsComponent } from './pages/produtos/fields/fields.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { FieldsSupliersComponent } from './pages/fornecedores/fields-supliers/fields-supliers.component';
import { FieldsUsersComponent } from './pages/usuarios/fields-users/fields-users.component';

/** services */
import { ProdutosService } from './services/produtos/produtosService';
import { FornecedoresService } from './services/fornecedores/fornecedoresService';
import { UsuariosService } from './services/usuarios/usuariosService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProdutosComponent,
    fieldsComponent,
    UsuariosComponent,
    FornecedoresComponent,
    FieldsSupliersComponent,
    FieldsUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [
    {provide: LOCALE_ID, 
      useValue: 'pt-BR'
    },
    ProdutosService,
    FornecedoresService,
    UsuariosService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
