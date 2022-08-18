import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-add-edit-modal',
  templateUrl: './account-add-edit-modal.component.html',
  styleUrls: ['./account-add-edit-modal.component.scss'],
})
export class AccountAddEditModalComponent implements OnInit {
  constructor() {}
  selectedCar: number = 0;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  ngOnInit(): void {}
}
