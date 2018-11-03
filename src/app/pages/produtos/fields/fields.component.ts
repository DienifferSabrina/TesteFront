import { ProdutosService } from './../../../services/produtos/produtosService';
import { FornecedoresService } from './../../../services/fornecedores/fornecedoresService';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class fieldsComponent implements OnInit {

  suppliers:any = [];
  product:any = {};

  constructor(private suppliersService: FornecedoresService,
              private productService: ProdutosService,
              private router : Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if(params['id'] != null){
        this.open(+params["id"]);
        this.searchSuppliers();
      } else {
        this.searchSuppliers();
      }
    });
 
  }

  open(id: number){
    this.productService.getById(id).subscribe(q => {
      this.product = q[0];
    });
  }

  searchSuppliers(){
    this.suppliersService.getAll().subscribe(q => {
      this.suppliers = q;
    });
  }

  submit(){
    if(!this.product.nome){
      swal('Validação', 'Por favor, preencha o nome do produto.', 'warning');
			return false;
    }

    if(!this.product.id_fornecedor){
      swal('Validação', 'Por favor, selecione um fornecedor.', 'warning');
			return false;
    }

    if(!this.product.saldo){
      swal('Validação', 'Por favor, preencha o saldo do produto.', 'warning');
			return false;
    }

    if(!this.product.valor){
      swal('Validação', 'Por favor, preencha o valor do produto.', 'warning');
    }

    if(this.product.valor == 0){
      swal('Validação', 'Por favor, o valor do produto não pode ser 0.', 'warning');
			return false;
    }

    this.product.id_fornecedor = parseInt(this.product.id_fornecedor);

    if(this.product.id) {
      this.productService.put(this.product).subscribe(q => {
        swal('Criação', `Produto alterado com sucesso.`, 'success');
        this.router.navigate(['/produtos']);
        return;
      }, err => {
      });
    } else {
      this.productService.post(this.product).subscribe(q => {
        swal('Criação', `Produto criado com sucesso.`, 'success');
        this.router.navigate(['/produtos']);
        return;
      }, err => {
      });
    }

    
          
  }



}
