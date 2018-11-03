/**
 import { environment } from './../../../environments/environment.prod';
 */

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "src/environments/environment";
import {map} from 'rxjs/operators';


@Injectable()
export class UsuariosService{
    
    constructor(private http: Http){ }

    public getAll(){
        return this.http.get(`${environment.UrlCore}usuarios/`, null).pipe(map(response => response.json()));
    }


}
