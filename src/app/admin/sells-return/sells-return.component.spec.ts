import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsReturnComponent } from './sells-return.component';

describe('SellsReturnComponent', () => {
  let component: SellsReturnComponent;
  let fixture: ComponentFixture<SellsReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellsReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellsReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
