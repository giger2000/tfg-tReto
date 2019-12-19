import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormaComponent } from './norma.component';

describe('NormaComponent', () => {
  let component: NormaComponent;
  let fixture: ComponentFixture<NormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
