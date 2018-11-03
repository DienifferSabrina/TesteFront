/**
 import { environment } from './../../../environments/environment.prod';
 */

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "src/environments/environment";
import {map} from 'rxjs/operators';


@Injectable()
export class FornecedoresService{
    
    constructor(private http: Http){ }

    public getAll(){
        return this.http.get(`${environment.UrlCore}fornecedor/`, null).pipe(map(response => response.json()));
    }


}
