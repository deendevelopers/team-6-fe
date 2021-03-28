import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ConfigService } from '../config/config.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-track-ads',
  templateUrl: './track-ads.component.html',
  styleUrls: ['./track-ads.component.scss']
})
export class TrackAdsComponent implements OnInit {

  @ViewChild('adsInfo') adsInfo: ElementRef;
  @ViewChild('individualAd') individualAd: ElementRef;

  faEye = faEye;

  peopleCount = 0;
  viewCount = 1;
  title = 'Title';
  description = 'Description';
  itemDelivered: boolean;
  peopleResponded: any;;
  selectedPerson: any;
  selectedAd: any;
  user: string;

  ads = [
    {
      id: 1,
      title: 'Ad 1',
      quality: 'New',
      description: 'Cool ad',
      giverId: 1,
      itemType: 'Pots and Pans'
    },
    {
      id: 2,
      title: 'Ad 2',
      quality: 'Used',
      description: 'Another cool ad',
      giverId: 1,
      itemType: 'Bedding'
    }
  ];

  constructor(private configService: ConfigService, private readonly sharedService: SharedService) {
    this.peopleResponded = [
      { name: 'Ben', code: 'NY' },
      { name: 'James', code: 'RM' },
      { name: 'Hannah', code: 'LDN' }
    ];
  }

  ngOnInit(): void {
    this.sharedService.getUser().subscribe(user => {
      if (user) {
        this.user = user.id;
      }
    });

    this.configService.getAds().subscribe(ads => {
      if (ads) {
        this.ads = [];
        this.ads = ads;
      }
    });

    if (this.user) {
      this.ads.filter(ad => ad.giverId.toString() === this.user)
    }

  }

  trackAd(id: number) {
    this.adsInfo.nativeElement.style.display = 'none';
    this.individualAd.nativeElement.style.display = 'block';

    this.selectedAd = this.ads.filter(ad => ad.id === id)
  }

  yes() {
    this.itemDelivered = true;
  }

  no() {
    this.itemDelivered = false;
  }
}
