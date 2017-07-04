import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatchService } from '../../match-service/match.service';
import { Pet } from '../../pet';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  currentPet: Pet;

  constructor(@Inject(MatchService) private matchService: MatchService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log('yo');
      this.currentPet = this.matchService.matchedPets[params['id']];
    });
  }
}
