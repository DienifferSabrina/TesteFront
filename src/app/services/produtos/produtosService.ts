import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import {map} from 'rxjs/operators';


@Injectable()
export class ProdutosService{

    constructor(private http: Http){ }

    public getAll(page = 1){
        return this.http.get(`${environment.UrlCore}produtos/all/${page}`, null).pipe(map(response => response.json()));
    }

    public getById(id: number){
        return this.http.get(`${environment.UrlCore}produto/${id}`, null).pipe(map(response => response.json()));
    }

    public post(product: any){
        return this.http.post(`${environment.UrlCore}produto/`, this.TratarBody(product), null).pipe(map(response => response.json()));
    }

    public put(product: any){
        return this.http.put(`${environment.UrlCore}produto/${product.id}`, this.TratarBody(product), null).pipe(map(response => response.json()));
    }

    public delete(id: any){
        return this.http.delete(`${environment.UrlCore}produto/${id}`, null).pipe(map(response => response.json()));
    }

    private TratarBody(product: any) {
        var entidade = (JSON.parse(JSON.stringify(product)));
        return entidade;
    }

}
