import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAddEditModalComponent } from './account-add-edit-modal.component';

describe('AccountAddEditModalComponent', () => {
  let component: AccountAddEditModalComponent;
  let fixture: ComponentFixture<AccountAddEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAddEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountAddEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
