import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetosFirebasePage } from './retos-firebase.page';

describe('RetosFirebasePage', () => {
  let component: RetosFirebasePage;
  let fixture: ComponentFixture<RetosFirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosFirebasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetosFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
