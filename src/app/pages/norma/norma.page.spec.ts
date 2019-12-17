import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormaPage } from './norma.page';

describe('NormaPage', () => {
  let component: NormaPage;
  let fixture: ComponentFixture<NormaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
