import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectweatherComponent } from './selectweather.component';

describe('SelectweatherComponent', () => {
  let component: SelectweatherComponent;
  let fixture: ComponentFixture<SelectweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectweatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
