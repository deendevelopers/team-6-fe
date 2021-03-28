import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ConfigService } from '../config/config.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receiver-debrief',
  templateUrl: './receiver-debrief.component.html',
  styleUrls: ['./receiver-debrief.component.scss']
})
export class ReceiverDebriefComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  ads;

  constructor(private configService: ConfigService, private readonly sharedService: SharedService, private router: Router,) {}

  ngOnInit(): void {
    this.sharedService.getAd().subscribe(ad => this.ads.push(ad));
  }

}
