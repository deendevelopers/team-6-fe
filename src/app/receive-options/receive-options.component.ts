import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faChevronLeft, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ConfigService } from '../config/config.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-options',
  templateUrl: './receive-options.component.html',
  styleUrls: ['./receive-options.component.scss']
})
export class ReceiveOptionsComponent implements OnInit {

  @ViewChild('backButton') backButton: ElementRef;
  @ViewChild('adOptions') adOptions: ElementRef;
  @ViewChild('donateInput') donateInput: ElementRef;
  @ViewChild('viewAd') viewAd: ElementRef;

  uploadedFiles: any[] = [];
  faChevronLeft = faChevronLeft;
  faEnvelope = faEnvelope;
  faEye = faEye;
  selectedOption: string;

  peopleCount = 0;
  viewCount = 0;
  selectedAd = [];
  ads;
  // ads = [
  //   {
  //     id: 1,
  //     title: 'Ad 1 - Pots and pans',
  //     quality: 'New',
  //     description: 'Cool ad',
  //     giverId: 1,
  //     itemType: 'Pots and Pans'
  //   },
  //   {
  //     id: 2,
  //     title: 'Ad 2 - Bedding',
  //     quality: 'Used',
  //     description: 'Another cool ad',
  //     giverId: 1,
  //     itemType: 'Bedding'
  //   },
  //   {
  //     id: 3,
  //     title: 'Ad 3 - Cleaning',
  //     quality: 'New',
  //     description: 'Cool ad',
  //     giverId: 1,
  //     itemType: 'Cleaning Materials'
  //   },
  //   {
  //     id: 4,
  //     title: 'Ad 4 - White good',
  //     quality: 'Used',
  //     description: 'Another cool ad',
  //     giverId: 1,
  //     itemType: 'White good'
  //   }
  // ];

  constructor(private configService: ConfigService, private readonly sharedService: SharedService, private router: Router, ) { }

  ngOnInit(): void {
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.adOptions.nativeElement.style.display = 'none';
    this.donateInput.nativeElement.style.display = 'block';
    this.backButton.nativeElement.style.display = 'block';

    this.configService.getAds().subscribe(ads => {
      if (ads.itemType === this.selectedOption) {
        this.ads = [];
        this.ads = ads;
      }
    });
    this.sharedService.getAd().subscribe(ad => this.ads = ad);

    this.ads = this.ads.filter(ad => ad.itemType === this.selectedOption)

  }

  goBack() {
    this.adOptions.nativeElement.style.display = 'block';
    this.donateInput.nativeElement.style.display = 'none';
    this.backButton.nativeElement.display = 'none';
    this.viewAd.nativeElement.style.display = 'none';
  }

  selectAd(id: number) {
    this.selectedAd = this.ads.filter(ad => ad.id === id);
    this.viewAd.nativeElement.style.display = 'block';
    this.donateInput.nativeElement.style.display = 'none';
  }

  goHome() {
    this.router.navigateByUrl('/sign-up')
  }

}
