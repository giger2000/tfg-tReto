import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormasPage } from './normas.page';

describe('NormasPage', () => {
  let component: NormasPage;
  let fixture: ComponentFixture<NormasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
