import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HorseDetailComponent } from './horseDetail/horseDetails';
import { HorseOverviewComponent } from './horseOverview/horseOverview';
import { ContactComponent } from './contact/contact';
import { MainStartComponent } from './home/home';
import { GalleryComponent } from './gallery/gallery';
import { SchoolComponent } from './school/school';
import { TeamComponent } from './team/team';
import { FarmComponent } from './farm/farm';
import { LongeComponent } from './school/longe_sitting_lesson/longe_lession';
import { SingleGroupLessonComponent } from './school/single_group_lesson/single_group_lesson';
import { RideOutComponent } from './school/rideOut/rideOut';
import { PonyLeadComponent } from './school/ponyLead/ponyLead';
import { ImpressumComponent } from './impressum/impressum';
import { DatenschutzComponent } from './datenschutz/datenschutz';
import { ArrivalComponent } from './arrival/arrival';
import { GalleryDetailComponent } from './galleryDetail/galleryDetail';

const appRoutes: Routes = [
  { path: 'index', component: MainStartComponent },
  { path: 'Impressum', component: ImpressumComponent},
  { path: 'Datenschutz', component: DatenschutzComponent},
  { path: 'Galerie/:name', component: GalleryDetailComponent },
  { path: 'Galerie', component: GalleryComponent },
  { path: 'Pferde/:name', component: HorseDetailComponent },
  { path: 'Pferde', component: HorseOverviewComponent },
  { path: 'Schulbetrieb', component: SchoolComponent },
  { path: 'Kontakt', component: ContactComponent },
  { path: 'Team', component: TeamComponent},
  { path: 'Hof', component: FarmComponent},
  { path: 'Longenstunde', component: LongeComponent},
  { path: 'Einzel- & Gruppenstunde', component: SingleGroupLessonComponent},
  { path: 'Ausritt', component: RideOutComponent},
  { path: 'Ponyführen', component: PonyLeadComponent},
  { path: 'Anfahrt', component: ArrivalComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, relativeLinkResolution: 'legacy' }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
