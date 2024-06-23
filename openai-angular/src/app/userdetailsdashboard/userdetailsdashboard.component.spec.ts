import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsdashboardComponent } from './userdetailsdashboard.component';

describe('UserdetailsdashboardComponent', () => {
  let component: UserdetailsdashboardComponent;
  let fixture: ComponentFixture<UserdetailsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserdetailsdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdetailsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
