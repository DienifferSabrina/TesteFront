import { FornecedoresService } from './../../services/fornecedores/fornecedoresService';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  suppliers:any = [];
  pages = [];
  actualPage;

  constructor(private suppliersService: FornecedoresService,
              private router : Router,
              private activatedRoute: ActivatedRoute 
            ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.actualPage = params['page'] || 1);
    this.searchSuppliers();
  }

  searchSuppliers(){
    this.suppliersService.getAll(this.actualPage).subscribe(q => {
      this.suppliers = q.data;
      for (let index = 1; index <= q.pages; index++) {
        this.pages.push(index);
      }
    });
  }

  setPage(page) {
    this.actualPage = page;
    this.router.navigate(['/fornecedores', page]);
    this.suppliersService.getAll(this.actualPage).subscribe(q => {
      this.suppliers = q.data;
      this.actualPage = q.pageActual;
    });
  }

  open(item: any){
    this.router.navigate(['/fornecedor/edit/', item.id]);
  }

  delete(item: any){
    this.suppliersService.delete(item.id).subscribe(q => {
      swal('Sucesso', 'Registro excluído com sucesso!', 'success');
      this.actualPage = 1;
      this.router.navigate(['/fornecedores/1']);
      this.suppliersService.getAll(this.actualPage).subscribe(q => {
        this.suppliers = q.data;
        this.actualPage = q.pageActual;
      });
    });
  }

}
