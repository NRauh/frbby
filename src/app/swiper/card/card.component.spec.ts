import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('choiceDone', () => {
    beforeEach(() => {
      spyOn(component.finished, 'emit');
    });

    it('should emit finished as true when the event has a time', () => {
      component.choiceDone({totalTime: 500});
      expect(component.finished.emit).toHaveBeenCalledWith(true);
    });

    it('should not emit anything when the event does not have a toatalTime', () => {
      component.choiceDone({totalTime: 0});
      expect(component.finished.emit).not.toHaveBeenCalled();
    });
  });
});
