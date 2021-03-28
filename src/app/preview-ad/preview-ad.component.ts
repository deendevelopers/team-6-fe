import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-preview-ad',
  templateUrl: './preview-ad.component.html',
  styleUrls: ['./preview-ad.component.scss']
})
export class PreviewAdComponent implements OnInit {

  ads: any;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getAd().subscribe(ad => this.ads = [ad])
  }

  edit() {

  }

  complete() {

    //^ POST /items
    //this.ad

    this.router.navigateByUrl('/ad-live-message')

  }
}
