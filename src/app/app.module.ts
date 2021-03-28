import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome-page/welcome-page.component';
import { HomeComponent } from './home/home.component';
import { GiverDebriefComponent } from './giver-debrief/giver-debrief.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ReceiverDebriefComponent } from './receiver-debrief/receiver-debrief.component';
import { VerificationComponent } from './verification/verification.component';
import { DonateOptionsComponent } from './donate-options/donate-options.component';
import { LogInComponent } from './log-in/log-in.component';
import { PreviewAdComponent } from './preview-ad/preview-ad.component';
import { AdLiveMessageComponent } from './ad-live-message/ad-live-message.component';
import { TrackAdsComponent } from './track-ads/track-ads.component';
import { ReceiveOptionsComponent } from './receive-options/receive-options.component';

import { SharedService } from './services/shared.service';
import { ConfigService } from './config/config.service';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    GiverDebriefComponent,
    CreateProfileComponent,
    ReceiverDebriefComponent,
    VerificationComponent,
    DonateOptionsComponent,
    LogInComponent,
    PreviewAdComponent,
    AdLiveMessageComponent,
    TrackAdsComponent,
    ReceiveOptionsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    InputTextModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    PasswordModule,
    InputTextareaModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [SharedService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
