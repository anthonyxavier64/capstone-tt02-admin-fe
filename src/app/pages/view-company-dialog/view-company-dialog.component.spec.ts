import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyDialogComponent } from './view-company-dialog.component';

describe('ViewCompanyDialogComponent', () => {
  let component: ViewCompanyDialogComponent;
  let fixture: ComponentFixture<ViewCompanyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompanyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompanyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
