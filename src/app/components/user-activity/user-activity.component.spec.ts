import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserActivityComponent } from './user-activity.component';

describe('UserActivityComponent', () => {
  let component: UserActivityComponent;
  let fixture: ComponentFixture<UserActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActivityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
