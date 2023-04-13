import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoViewComponent } from './trabajo-view.component';

describe('TrabajoViewComponent', () => {
  let component: TrabajoViewComponent;
  let fixture: ComponentFixture<TrabajoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
