import { Component, OnInit, Inject } from '@angular/core';
import { MatchService } from '../match-service/match.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  constructor(@Inject(MatchService) public matchService: MatchService) { }

  ngOnInit() {
    this.matchService.loadQueue();
  }

  like() {
    this.matchService.petQueue[0].selection = 'liked';
    this.matchService.matchStatus(this.matchService.petQueue[0]);
  }

  dislike() {
    this.matchService.petQueue[0].selection = 'disliked';
  }

  onFinished() {
    this.matchService.petQueue.shift();
    this.matchService.getPet().then((pet) => {
      this.matchService.petQueue.push(pet);
    });
  }
}
