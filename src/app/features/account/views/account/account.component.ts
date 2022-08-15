import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { AccountAddEditModalComponent } from '../modal/account-add-edit-modal/account-add-edit-modal.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  bsModalRef: BsModalRef | undefined;
  constructor(
    private _router: Router,
    private modalService: BsModalService
     ) { }

  ngOnInit(): void {
  }

  goToDetails(id:number){
    this._router.navigate([`oms/account/${id}/account-details`], {
    });
  }
  openModal(action:string, data?:object | any){
    console.log(action);
    // this.bsModalRef = this.modalService.show(AccountAddEditModalComponent);
    // const modalOptions: ModalOptions = {
    //   initialState: {
    //     action: action,
    //     tSData: data,
    //   },
    //   id: 'accountaddModal',
    //   class: 'modal-lg',
    // };
    // this.bsModalRef = this._modalService.show(
    //   AccountAddEditModalComponent,
    //   modalOptions
    // );
    // this.bsModalRef.content.closeBtnName = 'Close';
    // this.bsModalRef.onHide?.subscribe((res) => {
    // });
  }

}
