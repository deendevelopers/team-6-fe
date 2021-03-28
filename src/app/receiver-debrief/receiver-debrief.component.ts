import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-receiver-debrief',
  templateUrl: './receiver-debrief.component.html',
  styleUrls: ['./receiver-debrief.component.scss']
})
export class ReceiverDebriefComponent implements OnInit {

  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
