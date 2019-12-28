import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterionicPage } from './registerionic.page';

describe('RegisterionicPage', () => {
  let component: RegisterionicPage;
  let fixture: ComponentFixture<RegisterionicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterionicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
