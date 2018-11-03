import { Router } from '@angular/router';
import { FornecedoresService } from './../../services/fornecedores/fornecedoresService';
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

  constructor( private productsService: ProdutosService,
              private router : Router) { }

  ngOnInit() {
    this.searchProducts();
  }

  searchProducts(){
    this.productsService.getAll().subscribe(q => {
      this.products = q;
    });
  }

  open(item: any){
    this.router.navigate(['/produtos/edit/', item.id]);
  }

  cancel(item: any){
    this.productsService.delete(item.id).subscribe(q => {
      swal('Sucesso', 'Registro excluído com sucesso!', 'success');
      this.searchProducts();
    });
  }

  
}
