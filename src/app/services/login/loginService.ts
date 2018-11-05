import { LoginModel } from './../../model/loginModel';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from './../../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class LoginService{

    loginModel = new LoginModel();
    
    constructor(private http: Http){ }

    public logar(loginModel: LoginModel){
        return this.http.post(`${environment.UrlCore}login/`,this.TratarBody(loginModel), null).pipe(map(response => response.json()));
    }

    private TratarBody(loginModel: LoginModel) {
        var entidade = (JSON.parse(JSON.stringify(loginModel)));
        return entidade;
    }

   



}
