import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pet } from '../pet';
import * as PetNames from 'pet-names';

@Injectable()
export class MatchService {
  petQueue = Array<Pet>();
  petNames = PetNames;
  matchedPets = Array<Pet>();

  constructor(public http: Http) { }

  loadQueue() {
    this.getPet().then((pet) => {
      this.petQueue.push(pet);
    });
    this.getPet().then((pet) => {
      this.petQueue.push(pet);
    });
    this.getPet().then((pet) => {
      this.petQueue.push(pet);
    });
  }

  getPet(): Promise<Pet> {
    return new Promise((resolve, reject) => {
      this.http.get('http://thecatapi.com/api/images/get?format=xml&type=jpg,png').subscribe((res: Response) => {
        let parser = new DOMParser();
        let catRes = parser.parseFromString(res.text(), "text/xml");
        let newPet = {
          name: this.petNames.random(),
          imageUrl: catRes.getElementsByTagName('url')[0].textContent,
          selection: ''
        };

        return resolve(newPet);
      }, (error) => {
        return reject(error);
      });
    });
  }

  matchStatus(potentialPet: Pet) {
    let matched = Math.random() >= 0.5;

    if (matched) {
      this.matchedPets.push(potentialPet);
    }
  }
}
