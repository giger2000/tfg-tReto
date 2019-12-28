import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginIonicPage } from './login-ionic.page';

describe('LoginIonicPage', () => {
  let component: LoginIonicPage;
  let fixture: ComponentFixture<LoginIonicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginIonicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginIonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
