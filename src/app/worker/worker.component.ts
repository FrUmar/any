import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent {
  closeModal:any;

  constructor(private modalService: NgbModal){}

  open(content:any) {
    debugger
		this.modalService.open(content);
	}
}