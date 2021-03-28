import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome-page/welcome-page.component';
import { HomeComponent } from './home/home.component';
import { GiverDebriefComponent } from './giver-debrief/giver-debrief.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ReceiverDebriefComponent } from './receiver-debrief/receiver-debrief.component';
import { VerificationComponent } from './verification/verification.component';
import { DonateOptionsComponent } from './donate-options/donate-options.component';
import { PreviewAdComponent } from './preview-ad/preview-ad.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdLiveMessageComponent } from './ad-live-message/ad-live-message.component';
import { TrackAdsComponent } from './track-ads/track-ads.component';
import {ReceiveOptionsComponent} from './receive-options/receive-options.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  //{path: '**', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: WelcomeComponent },
  { path: 'giver-debrief', component: GiverDebriefComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'receiver-debrief', component: ReceiverDebriefComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'donate-options', component: DonateOptionsComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'preview-ad', component: PreviewAdComponent },
  { path: 'ad-live-message', component: AdLiveMessageComponent },
  { path: 'track-ads', component: TrackAdsComponent },
  { path: 'receive-options', component: ReceiveOptionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
