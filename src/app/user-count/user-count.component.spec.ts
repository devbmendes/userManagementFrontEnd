import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCountComponent } from './user-count.component';

describe('UserCountComponent', () => {
  let component: UserCountComponent;
  let fixture: ComponentFixture<UserCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCountComponent]
    });
    fixture = TestBed.createComponent(UserCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
