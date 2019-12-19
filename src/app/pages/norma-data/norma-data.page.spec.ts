import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormaDataPage } from './norma-data.page';

describe('NormaDataPage', () => {
  let component: NormaDataPage;
  let fixture: ComponentFixture<NormaDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormaDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
