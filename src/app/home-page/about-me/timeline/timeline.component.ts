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

      { title: 'MASTER MIAGE', date: 'de 2022 à Maintenant', type:'Étude', color: '#ff928b', desc:"Formation en systèmes du numérique et du managament, gestion de projets, Contrôle de gestion, gestion des riques, web-services", achievement: "Actuellement en cours" },
      { title: 'DATA ENGINEER', date: 'de 2022 à Maintenant',type:'Alternance',  color: '#cdeac0', desc: "Alternance au sein du groupe SCALIAN en tant que data engineer sur différents projets pour des clients de l'aéronautique, du secteur pétrolier, étatique...", achievement: "Découvertes de solutions technologiques, application des compétences techniques, communication, travail en équipe"},
      { title: 'CHEF DE PROJET', date: 'de Août 2022 à Juin 2023',type:'Miage',  color: '#b8bedd', desc: "Chef de projet d'une équipe de 5 membres, avec un budget de 24000 euros pour l'organisation d'un événement important lié à la MIAGE de Bordeaux", achievement: "Gestion de projet, budgetisation, communication, relations avec les clients et les partenaires" },
      { title: 'DATA ENGINEER', date: 'de Avril à Juin 2022',type:'Stage',  color: '#cdeac0', desc:"Stage au sein de SCALIAN en tant que data engineer, développement d'applications d'analyses de données en python ", achievement: "Compétences techniques, découverte du monde de sociétés Informatiques " },
      { title: 'L3 MIAGE', date: 'de 2021 à 2022',type:'Étude', color: '#ff928b', desc: "Formation en finance, droit, gestion d'entreprises, comptabilité et systèmes numériques", achievement: "Obtention d'une diplôme de licence MIAGE" },
      { title: "RESPONSABLE SYSTEMES D'INFORMATIONS", date: 'de Sept 2021 à Fév 2022', type:'CDD', color: '#b8bedd', desc:"Responsable du SI d'une organisation politique de plus de 25 000 membres. Gestions des bases de données, des serveurs, des sites web, des contacts et des services de l'organisation.", achievement:"Compétences techniques, compréhension des besoins, communication, adaptation " },
      { title: 'IUT INFORMATIQUE', date: 'de 2019 à 2021',type:'Étude', color: '#ff928b',desc:"Formation en informatique généraliste, développement, réseaux, systèmes, gestion de projet, gestion d'entreprise, communication, anglais, mathématiques, économie, droit, gestion, marketing, comptabilité, etc.", achievement: "Obtention d'un diplôme universitaire et technologique en Informatique"},

    ];
  }


}
