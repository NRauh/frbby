import { Component, OnInit, Inject } from '@angular/core';
import { MatchService } from '../match-service/match.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(@Inject(MatchService) public matchService: MatchService) { }

  ngOnInit() {
  }

}
