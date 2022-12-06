import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirModificarAdminComponent } from './subir-modificar-admin.component';

describe('SubirModificarAdminComponent', () => {
  let component: SubirModificarAdminComponent;
  let fixture: ComponentFixture<SubirModificarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirModificarAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirModificarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
