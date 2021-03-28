import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  @ViewChild('userDoesNotExist') userDoesNotExist: ElementRef;

  username: string;
  password: string;

  users: any;
  givers;
  receivers;

  constructor(private router: Router, private configService: ConfigService, private readonly sharedService: SharedService) { }

  ngOnInit(): void {
    // this.sharedService.getUser().subscribe(user => {
    //   if (user) {
    //     this.users = givers;
    //   }
    // });

    this.configService.getGivers().subscribe(givers => {
      if (givers) {
        this.givers = givers;
      }
    });

    // this.configService.getReceivers().subscribe(receivers => {
    //   if (receivers) {
    //     this.receivers = receivers;
    //   }
    // });
  }

  logIn() {
    let userIsGiver = [];
    let userIsReceiver = [];

    if (this.givers) {
      userIsGiver = this.givers.filter(giver => {
        giver.name === this.username
      });
    }

    if (this.receivers) {
      userIsReceiver = this.receivers.filter(receivers => {
        receivers.name === this.username
      });
    }

    if (userIsGiver.length === 0 || userIsReceiver.length === 0) {
      this.userDoesNotExist.nativeElement.style.display = 'block';
    }

    if (userIsGiver.length === 0 ){
      this.users = this.givers;
    }

    if (userIsReceiver.length === 0 ){
      this.users = this.receivers;
    }

    if (this.users) {
      const user = this.users.filter(user => user.name === this.username);
      this.sharedService.setUser(user);
    }

    this.router.navigateByUrl('/donate-options')
  }

}
