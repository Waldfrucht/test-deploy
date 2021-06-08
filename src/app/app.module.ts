import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery';
import { HorseDetailComponent } from './horseDetail/horseDetails';
import { MainStartComponent } from './home/home';
import { AppRoutingModule } from './app-routing.module';
import { HorseDetailService } from './horseDetail/HorseDetailService';
import { Logger } from './utilities/Logger';
import { HorseOverviewComponent } from './horseOverview/horseOverview';
import { SchoolComponent } from './school/school';
import { TeamComponent } from './team/team';
import { FarmComponent } from './farm/farm';
import { ImpressumComponent } from './impressum/impressum';
import { DatenschutzComponent } from './datenschutz/datenschutz';
import { ArrivalComponent } from './arrival/arrival';
import { GoogleMapsModule } from '@angular/google-maps';
import { GalleryDetailComponent } from './galleryDetail/galleryDetail';
import { GaleryDetailService } from './galleryDetail/GaleryDetailService';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryDetailComponent,
    HorseDetailComponent,
    MainStartComponent,
    HorseOverviewComponent,
    SchoolComponent,
    TeamComponent,
    FarmComponent,
    ImpressumComponent,
    DatenschutzComponent,
    ArrivalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [HorseDetailService, Logger, GaleryDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
