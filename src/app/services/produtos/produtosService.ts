/**
 import { environment } from './../../../environments/environment.prod';
 */

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "src/environments/environment";
import {map} from 'rxjs/operators';


@Injectable()
export class ProdutosService{
    
    constructor(private http: Http){ }

    public getAll(){
        return this.http.get(`${environment.UrlCore}produtos/`, null).pipe(map(response => response.json()));
    }

    public getById(id: number){
        return this.http.get(`${environment.UrlCore}produtos/${id}`, null).pipe(map(response => response.json()));
    }

    public post(product: any){
        return this.http.post(`${environment.UrlCore}produtos/`, this.TratarBody(product), null).pipe(map(response => response.json()));
    }

    public put(product: any){
        return this.http.put(`${environment.UrlCore}produtos/${product.id}`, this.TratarBody(product), null).pipe(map(response => response.json()));
    }

    public delete(id: any){
        return this.http.delete(`${environment.UrlCore}produtos/${id}`, null).pipe(map(response => response.json()));
    }

    private TratarBody(product: any) {
        var entidade = (JSON.parse(JSON.stringify(product)));
        return entidade;
    }

}
