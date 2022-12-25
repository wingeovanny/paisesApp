import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCapitaComponent } from './por-capita.component';

describe('PorCapitaComponent', () => {
  let component: PorCapitaComponent;
  let fixture: ComponentFixture<PorCapitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorCapitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorCapitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
