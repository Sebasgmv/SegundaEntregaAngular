import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoEditComponent } from './trabajo-edit.component';

describe('TrabajoEditComponent', () => {
  let component: TrabajoEditComponent;
  let fixture: ComponentFixture<TrabajoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
