import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent {
  events: any[];

  constructor() {
    this.events = [
      { status: 'IUT INFORMATIQUE', date: '2019-2021 :', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'STAGE DEVELOPPEUR INFORMATIQUE', date: '2021 :', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'RESPONSABLE SERVICE INFORMATIQUE', date: '2021-2022', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'L3 MIAGE', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
      { status: 'STAGE DATA ENGINEER', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
      { status: 'M1 MIAGE', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
      { status: 'ALTERNANT SCALIAN', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
      { status: 'CHEF DE PROJET', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },

    ];
  }
}
