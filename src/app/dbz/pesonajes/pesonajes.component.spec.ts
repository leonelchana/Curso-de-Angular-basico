import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonajesComponent } from './pesonajes.component';

describe('PesonajesComponent', () => {
  let component: PesonajesComponent;
  let fixture: ComponentFixture<PesonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesonajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
