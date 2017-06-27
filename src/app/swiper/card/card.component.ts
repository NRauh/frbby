import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('swipeDirection', [
      state('liked', style({ transform: 'translateX(150%)' })),
      state('disliked', style({ transform: 'translateX(-150%)' })),
      transition('* => liked', animate('500ms ease-in-out')),
      transition('* => disliked', animate('500ms ease-in-out'))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() choice: string;
  @Input() image: string;
  @Output() finished = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  choiceDone() {
    this.finished.emit(true);
  }
}
