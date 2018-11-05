import { LoginModel } from './../../model/loginModel';
/**
 import { environment } from './../../../environments/environment.prod';
 */

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "src/environments/environment";
import {map} from 'rxjs/operators';


@Injectable()
export class LoginService{

    loginModel = new LoginModel();
    
    constructor(private http: Http){ }

    public logar(loginModel: LoginModel){
        return this.http.get(`${environment.UrlCore}login/${loginModel.login}/${loginModel.senha}`, null).pipe(map(response => response.json()));
    }

   



}
