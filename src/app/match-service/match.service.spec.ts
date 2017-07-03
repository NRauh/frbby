import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { MatchService } from './match.service';
import { Pet } from '../pet';

describe('MatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ MatchService ]
    });
  });

  it('should be created', inject([MatchService], (service: MatchService) => {
    expect(service).toBeTruthy();
  }));

  describe('loadQueue', () => {
    beforeEach(inject([MatchService], (service: MatchService) => {
      let expectedPet: Pet = {
        name: 'Fluffy',
        imageUrl: 'http://example.com/image.jpg',
        selection: ''
      };
      let expectedPromise = new Promise((resolve) => {
        return resolve(expectedPet);
      });
      spyOn(service, 'getPet').and.returnValue(expectedPromise);
    }));

    it('should getPet three times', inject([MatchService], (service: MatchService) => {
      service.loadQueue();
      expect(service.getPet).toHaveBeenCalledTimes(3);
    }));
  });

  describe('getPet', () => {
    let expectedXml;

    beforeEach(inject([MatchService], (service: MatchService) => {
      expectedXml = '<?xml version="1.0"?><response><data><images>' +
        '<image><url>http://example.com/image.jpg</url></image></images></data></response>';

      spyOn(service.http, 'get').and.returnValue(Observable.of({
        text: () => { return expectedXml; }
      }));

      spyOn(service.petNames, 'random').and.returnValue('fluffy');
    }));

    it('should get a picture of a cat', inject([MatchService], (service: MatchService) => {
      service.getPet();
      expect(service.http.get).toHaveBeenCalledWith('http://thecatapi.com/api/images/get?format=xml&type=jpg,png');
    }));

    it('should get a random pet name', inject([MatchService], (service: MatchService) => {
      service.getPet();
      expect(service.petNames.random).toHaveBeenCalled();
    }));

    it('should return the a promise pet object', inject([MatchService], (service: MatchService) => {
      let expectedPet: Pet = {
        name: 'fluffy',
        imageUrl: 'http://example.com/image.jpg',
        selection: ''
      }
      service.getPet().then((pet) => {
        expect(pet).toEqual(expectedPet);
      });
    }));
  });
});
