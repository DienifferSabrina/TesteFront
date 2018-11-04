import { FornecedoresService } from './../../../services/fornecedores/fornecedoresService';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fields-suppliers',
  templateUrl: './fields-suppliers.component.html',
  styleUrls: ['./fields-suppliers.component.css']
})
export class FieldsSuppliersComponent implements OnInit {

  supplier:any = {};

  constructor(private suppliersService: FornecedoresService,
              private router : Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] != null){
        this.open(+params["id"]);
      }
    });
  }

  open(id: number){
    this.suppliersService.getById(id).subscribe(q => {
      this.supplier = q[0];
    });
  }

  submit(){
    if(!this.supplier.nome){
      swal('Validação', 'Por favor, preencha o nome do fornecedor.', 'warning');
			return false;
    }

    if(!this.supplier.razaoSocial){
      swal('Validação', 'Por favor, preencha a razão social do fornecedor.', 'warning');
			return false;
    }

    if(!this.supplier.cnpj){
      swal('Validação', 'Por favor, preencha o cnpj do fornecedor.', 'warning');
			return false;
    }

    if(!this.supplier.telefone){
      swal('Validação', 'Por favor, preencha o telefone do fornecedor.', 'warning');
			return false;
    }

    if(!this.supplier.endereco){
      swal('Validação', 'Por favor, preencha o endereço do fornecedor.', 'warning');
			return false;
    }

    if(!this.supplier.numero || this.supplier.numero == 0){
      swal('Validação', 'Por favor, preencha o número do endereço do fornecedor.', 'warning');
			return false;
    }

    if(!this.supplier.bairro){
      swal('Validação', 'Por favor, preencha o bairro do fornecedor.', 'warning');
			return false;
    }

    if(!this.supplier.cidade){
      swal('Validação', 'Por favor, preencha o cidade do fornecedor.', 'warning');
			return false;
    }

    if(!this.supplier.estado){
      swal('Validação', 'Por favor, preencha o estado do fornecedor.', 'warning');
			return false;
    }

    if(this.supplier.id){
      this.suppliersService.put(this.supplier).subscribe(q => {
        swal('Criação', `Fornecedor alterado com sucesso.`, 'success');
        this.router.navigate(['/fornecedores']);
        return;
      }, err => {
      });
    } else {
      this.suppliersService.post(this.supplier).subscribe(q => {
        swal('Criação', `Fornecedor criado com sucesso.`, 'success');
        this.router.navigate(['/fornecedores']);
        return;
      }, err => {
      });
    }    
  }

}
