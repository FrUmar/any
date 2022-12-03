import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';

@Component({
  selector: 'app-used-product',
  templateUrl: './used-product.component.html',
  styleUrls: ['./used-product.component.css']
})

export class UsedProductComponent {
  constructor(private modalService:NgbModal){
    
  }
  
  testModal(data:any){
    debugger
    this.modalService.open(data,{ ariaLabelledBy: 'modal-basic-title', size: 'xl'})
    // .result.then((res:any)=>{this.closeModal = `Closed with: ${res}`},(res)=>{
    //   this.closeModal = `Dismissed ${this.getDismissReason(res)}`});
  }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
