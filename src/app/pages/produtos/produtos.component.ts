import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../../services/produtos/produtosService';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  products:any = [];
  pages = [];
  actualPage;

  constructor(
    private productsService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.actualPage = params['page'] || 1);
    this.searchProducts();
  }

  searchProducts(){
    this.productsService.getAll(this.actualPage).subscribe(q => {
      this.products = q.data;
      this.actualPage = q.pageActual;
      for (let index = 1; index <= q.pages; index++) {
        this.pages.push(index);
      }
    });
  }

  setPage(page) {
    this.actualPage = page;
    this.router.navigate(['/produtos', page]);
    this.productsService.getAll(this.actualPage).subscribe(q => {
      this.products = q.data;
      this.actualPage = q.pageActual;
    });
  }

  open(item: any){
    this.router.navigate(['/produtos/edit/', item.id]);
  }

  delete(item: any){
    this.productsService.delete(item.id).subscribe(q => {
      swal('Sucesso', 'Registro excluído com sucesso!', 'success');
      this.searchProducts();
    });
  }

}
