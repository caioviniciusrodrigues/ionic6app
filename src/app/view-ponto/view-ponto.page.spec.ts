import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPontoPage } from './view-ponto.page';

describe('ViewPontoPage', () => {
  let component: ViewPontoPage;
  let fixture: ComponentFixture<ViewPontoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPontoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
