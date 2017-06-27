import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperComponent } from './swiper.component';
import { CardComponent } from './card/card.component';

fdescribe('SwiperComponent', () => {
  let component: SwiperComponent;
  let fixture: ComponentFixture<SwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwiperComponent,
        CardComponent
      ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('like', () => {
    it('should set the selection for the first item in pets to liked', () => {
      component.pets[0].selection = undefined;
      component.like();
      expect(component.pets[0].selection).toBe('liked');
    });
  });

  describe('disliked', () => {
    it('should set the selection for the first item in pets to be disliked', () => {
      component.pets[0].selection = undefined;
      component.dislike();
      expect(component.pets[0].selection).toBe('disliked');
    });
  });

  describe('onFinished', () => {
    it('should shift the pets array', () => {
      expect(component.pets.length).toBe(2);
      component.onFinished();
      expect(component.pets.length).toBe(1);
      expect(component.pets[0].name).toBe('ken');
    });
  });
});
