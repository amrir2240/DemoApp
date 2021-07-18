import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofsportsComponent } from './listofsports.component';

describe('ListofsportsComponent', () => {
  let component: ListofsportsComponent;
  let fixture: ComponentFixture<ListofsportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofsportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofsportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
