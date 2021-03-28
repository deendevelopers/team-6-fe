import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-donate-options',
  templateUrl: './donate-options.component.html',
  styleUrls: ['./donate-options.component.scss']
})
export class DonateOptionsComponent implements OnInit {

  @ViewChild('backButton') backButton: ElementRef;
  @ViewChild('donateOptions') donateOptions: ElementRef;
  @ViewChild('donateInput') donateInput: ElementRef;

  uploadedFiles: any[] = [];
  faChevronLeft = faChevronLeft;
  selectedOption: string;
  description: string;
  title: string;
  ad: any;
  giverId: any;

  constructor(private router: Router, private sharedService: SharedService, private configService: ConfigService,) { }

  ngOnInit(): void {
    this.sharedService.getUser().subscribe(user => {
      if (user){
        this.giverId = user.id;
      }
    });
  }

  donateOption(option) {
    this.selectedOption = option;
    this.donateOptions.nativeElement.style.display = 'none';
    this.donateInput.nativeElement.style.display = 'block';
    this.backButton.nativeElement.style.display = 'block';
  }

  // TODO
  onBasicUploadAuto(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  goBack() {
    this.donateOptions.nativeElement.style.display = 'block';
    this.donateInput.nativeElement.style.display = 'none';
    this.backButton.nativeElement.display = 'none';
  }

  createAd() {
    const quality = (<HTMLInputElement>document.querySelector('input[name="quality"]:checked')).value;
    this.ad = {
      itemType: this.selectedOption,
      description: this.description,
      quality: quality,
      title: this.title,
      giverId: this.giverId
    }
    this.sharedService.setAd(this.ad);
    this.router.navigateByUrl('/preview-ad')
  }
}
