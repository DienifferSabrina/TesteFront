import { FornecedoresService } from './../../services/fornecedores/fornecedoresService';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  suppliers:any = [];

  constructor(private suppliersService: FornecedoresService,
              private router : Router ) { }

  ngOnInit() {
    this.searchSuppliers();
  }

  searchSuppliers(){
    this.suppliersService.getAll().subscribe(q => {
      this.suppliers = q;
    });
  }

  open(item: any){
    this.router.navigate(['/fornecedores/edit/', item.id]);
  }

  delete(item: any){
    this.suppliersService.delete(item.id).subscribe(q => {
      swal('Sucesso', 'Registro excluído com sucesso!', 'success');
      this.searchSuppliers();
    });
  }

}
