import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcacaoPontoPage } from './marcacao-ponto.page';

describe('MarcacaoPontoPage', () => {
  let component: MarcacaoPontoPage;
  let fixture: ComponentFixture<MarcacaoPontoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcacaoPontoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcacaoPontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
