import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  pets = [{
    url: 's',
    name: 'bob',
    selection: ''
  }, {
    url: 'c',
    name: 'ken',
    selection: ''
  }];

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.pets[0].selection = 'liked'
  }

  dislike() {
    this.pets[0].selection = 'disliked'
  }

  onFinished() {
    this.pets.shift();
  }
}
