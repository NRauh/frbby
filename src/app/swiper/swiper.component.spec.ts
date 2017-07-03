import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperComponent } from './swiper.component';
import { CardComponent } from './card/card.component';
import { MatchService } from '../match-service/match.service';
import { Pet } from '../pet';

class MatchServiceMock {
  petQueue: Pet[] = [{
    name: 'Fluffy',
    imageUrl: 'http://example.com/image.jpg',
    selection: ''
  }, {
    name: 'Dave',
    imageUrl: 'http://example.com/image.jpg',
    selection: ''
  }, {
    name: 'Panda',
    imageUrl: 'http://example.com/image.jpg',
    selection: ''
  }];

  loadQueue = jasmine.createSpy('loadQueue');
  getPet = jasmine.createSpy('getPet').and.returnValue(new Promise((resolve) => {
    let newPet: Pet = {
      name: 'Lilly',
      imageUrl: 'http://example.com/image.jpg',
      selection: ''
    };
    return resolve(newPet);
  }));
}

fdescribe('SwiperComponent', () => {
  let component: SwiperComponent;
  let fixture: ComponentFixture<SwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwiperComponent,
        CardComponent
      ],
      imports: [ BrowserAnimationsModule ],
      providers: [
        { provide: MatchService, useClass: MatchServiceMock }
      ]
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

  describe('ngOnInit', () => {
    it('should load the petQueue', () => {
      expect(component.matchService.loadQueue).toHaveBeenCalled();
    });
  });

  describe('like', () => {
    it('should set the selection for the first item in pets to liked', () => {
      component.matchService.petQueue[0].selection = undefined;
      component.like();
      expect(component.matchService.petQueue[0].selection).toBe('liked');
    });
  });

  describe('disliked', () => {
    it('should set the selection for the first item in pets to be disliked', () => {
      component.matchService.petQueue[0].selection = undefined;
      component.dislike();
      expect(component.matchService.petQueue[0].selection).toBe('disliked');
    });
  });

  describe('onFinished', () => {
    it('should shift the petQueue', () => {
      expect(component.matchService.petQueue.length).toBe(3);
      component.onFinished();
      expect(component.matchService.petQueue.length).toBe(2);
    });

    it('should get a new pet and add it to the queue', () => {
      component.onFinished();
      expect(component.matchService.getPet).toHaveBeenCalled();
    });
  });
});
