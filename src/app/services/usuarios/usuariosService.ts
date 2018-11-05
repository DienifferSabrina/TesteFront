import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import {map} from 'rxjs/operators';


@Injectable()
export class UsuariosService{
    
    constructor(private http: Http){ }

    public getAll(){
        return this.http.get(`${environment.UrlCore}usuario/`, null).pipe(map(response => response.json()));
    }

    public getById(id: number){
        return this.http.get(`${environment.UrlCore}usuario/${id}`, null).pipe(map(response => response.json()));
    }

    public post(user: any){
        return this.http.post(`${environment.UrlCore}usuario/`, this.TratarBody(user), null).pipe(map(response => response.json()));
    }

    public put(user: any){
        return this.http.put(`${environment.UrlCore}usuario/${user.id}`, this.TratarBody(user), null).pipe(map(response => response.json()));
    }

    public delete(id: any){
        return this.http.delete(`${environment.UrlCore}usuario/${id}`, null).pipe(map(response => response.json()));
    }

    private TratarBody(user: any) {
        var entidade = (JSON.parse(JSON.stringify(user)));
        return entidade;
    }



}
