import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'horseSite';
  readonly backgroundImgURLKloster = './assets/images/Background/Hintergrund_Kloster.jpg';
  readonly backgroundImgURLPferd = './assets/images/Background/Hintergrund_Pferd.jpg';
  readonly backgroundImgURLPfarrhaus = './assets/images/Background/Hintergrund_Pfarrhaus.jpg';

  // Variables for all toolbar links
  readonly SCHULBETRIEB_LINK = '/Schulbetrieb';
  readonly SCHULBETRIEB_TEXT = 'Schulbetrieb';

  readonly LONGE_SITZ_LINK = '/Longenstunde';
  readonly LONGE_SITZ_TEXT = 'Longen- und Sitzstunden';

  readonly EINZEL_GRUPPE_LINK = '/Einzel- & Gruppenstunde';
  readonly EINZEL_GRUPPE_TEXT = 'Einzel- und Gruppenstunden';

  readonly AUSRITT_LINK = '/Ausritt';
  readonly AUSRITT_TEXT = 'Ausritt';

  readonly PONY_FUEHREN_LINK = '/Ponyführen';
  readonly PONY_FUEHREN_TEXT = 'Ponyführen';

  readonly PFERDE_LINK = '/Pferde';
  readonly PFERDE_TEXT = 'Lehrpferde & Ponys';

  readonly HOF_LINK = '/Hof';
  readonly HOF_TEXT = 'Stall & Anlage';

  readonly KONTAKT_LINK = '/Kontakt';
  readonly KONTAKT_TEXT = 'Ansprechpartner';

  readonly GALERIE_LINK = '/Galerie';
  readonly GALERIE_TEXT = 'Galerie';

  readonly ANFAHRT_LINK = '/Anfahrt';
  readonly ANFAHRT_TEXT = 'Anfahrt';

  readonly TEAM_LINK = '/Team';
  readonly TEAM_TEXT = 'Unser Team';

  readonly IMPRESSUM_LINK = '/Impressum';
  readonly IMPRESSUM_TEXT = 'Impressum';

  readonly DATENSCHUTZ_LINK = '/Datenschutz';
  readonly DATENSCHUTZ_TEXT = 'Datenschutz';  

  ngOnInit() {}

}
