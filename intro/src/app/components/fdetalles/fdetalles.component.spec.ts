import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdetallesComponent } from './fdetalles.component';

describe('FdetallesComponent', () => {
  let component: FdetallesComponent;
  let fixture: ComponentFixture<FdetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
