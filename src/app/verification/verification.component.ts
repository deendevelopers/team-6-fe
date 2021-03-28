import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  @ViewChild('inputText') inputText: ElementRef;
  @ViewChild('infoText') infoText: ElementRef;
  @ViewChild('otpButton') otpButton: ElementRef;
  @ViewChild('completeVerification') completeVerificationButton: ElementRef;
  
  phoneNumber: any;

  constructor(private router: Router, ) { }

  ngOnInit(): void {
  }

  getOTP() {
    this.inputText.nativeElement.innerHTML = 'Enter the 4 digit code';
    this.infoText.nativeElement.innerHTML = 'Got the text?'
    this.otpButton.nativeElement.style.display = 'none';
    this.completeVerificationButton.nativeElement.style.display = 'block';
  }

  completeVerification() {
    this.router.navigateByUrl('/create-profile');
  }
}
