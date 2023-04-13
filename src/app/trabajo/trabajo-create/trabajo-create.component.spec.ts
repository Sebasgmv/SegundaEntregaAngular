import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoCreateComponent } from './trabajo-create.component';

describe('TrabajoCreateComponent', () => {
  let component: TrabajoCreateComponent;
  let fixture: ComponentFixture<TrabajoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
