import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAvisosComponent } from './tabla-avisos.component';

describe('TablaAvisosComponent', () => {
  let component: TablaAvisosComponent;
  let fixture: ComponentFixture<TablaAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAvisosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
