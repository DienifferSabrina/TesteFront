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

    public getById(id: number){
        return this.http.get(`${environment.UrlCore}fornecedor/${id}`, null).pipe(map(response => response.json()));
    }

    public post(supplier: any){
        return this.http.post(`${environment.UrlCore}fornecedor/`, this.TratarBody(supplier), null).pipe(map(response => response.json()));
    }

    public put(supplier: any){
        return this.http.put(`${environment.UrlCore}fornecedor/${supplier.id}`, this.TratarBody(supplier), null).pipe(map(response => response.json()));
    }

    public delete(id: any){
        return this.http.delete(`${environment.UrlCore}fornecedor/${id}`, null).pipe(map(response => response.json()));
    }


    private TratarBody(supplier: any) {
        var entidade = (JSON.parse(JSON.stringify(supplier)));
        return entidade;
    }

}
