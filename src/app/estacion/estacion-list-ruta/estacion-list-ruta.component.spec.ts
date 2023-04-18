import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionListRutaComponent } from './estacion-list-ruta.component';

describe('EstacionListRutaComponent', () => {
  let component: EstacionListRutaComponent;
  let fixture: ComponentFixture<EstacionListRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacionListRutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacionListRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
