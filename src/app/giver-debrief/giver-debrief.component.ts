import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-giver-debrief',
  templateUrl: './giver-debrief.component.html',
  styleUrls: ['./giver-debrief.component.scss']
})
export class GiverDebriefComponent implements OnInit {

  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
