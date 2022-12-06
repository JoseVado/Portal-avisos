import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirModificarAvisoComponent } from './subir-modificar-aviso.component';

describe('SubirModificarAvisoComponent', () => {
  let component: SubirModificarAvisoComponent;
  let fixture: ComponentFixture<SubirModificarAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirModificarAvisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirModificarAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
