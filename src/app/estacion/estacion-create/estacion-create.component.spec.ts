import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionCreateComponent } from './estacion-create.component';

describe('EstacionCreateComponent', () => {
  let component: EstacionCreateComponent;
  let fixture: ComponentFixture<EstacionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
