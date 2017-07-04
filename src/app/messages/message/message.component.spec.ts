import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { MatchService } from '../../match-service/match.service';
import { ActivatedRoute } from '@angular/router';

class MatchServiceMock {
}
class ActivatedRouteMock {
  params = {
    subscribe: jasmine.createSpy('subscribe')
  };
}

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent ],
      providers: [
        { provide: MatchService, useClass: MatchServiceMock },
        { provide: ActivatedRoute, useClass: ActivatedRouteMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    component.currentPet = {
      name: 'Fluffy',
      imageUrl: 'http://example.com/image.jpg',
      selection: ''
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
