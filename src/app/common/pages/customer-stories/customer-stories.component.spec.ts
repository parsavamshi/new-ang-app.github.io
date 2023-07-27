import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStoriesComponent } from './customer-stories.component';

describe('CustomerStoriesComponent', () => {
  let component: CustomerStoriesComponent;
  let fixture: ComponentFixture<CustomerStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
