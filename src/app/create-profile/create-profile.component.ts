import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  uploadedFiles: any[] = [];
  fullName: string;
  town: string;
  bio: string;
  password: string;
  profile: any;


  constructor(private router: Router, private configService: ConfigService) { }

  ngOnInit(): void {
  }

  onBasicUploadAuto(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  createProfile() {
    this.profile = {
      name: this.fullName,
      town: this.town,
      bio: this.bio,
      password: this.password
    }
    
    this.configService.saveGiver(this.profile);
  }

  backButton() {
    this.router.navigateByUrl('/sign-up')
  }
}
