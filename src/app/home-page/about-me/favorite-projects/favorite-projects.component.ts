import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-projects',
  templateUrl: './favorite-projects.component.html',
  styleUrls: ['./favorite-projects.component.scss']
})
export class FavoriteProjectsComponent {
  projects: Project[] = [
    {
      imageUrl: 'path/to/image1.jpg',
      name: 'Project 1',
      intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      favorite: true,

    },
    {
      imageUrl: 'path/to/image2.jpg',
      name: 'Project 2',
      intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      technologies: ['React', 'JavaScript', 'CSS'],
      favorite: false,

    },
    {
      imageUrl: 'assets/img/projects/uni.png',
      name: 'Site d\'une organisation politique',
      intro:'Site à porté nationale d\'une organisation étudiante de plus de 25000 membres dans toute la France',
      technologies: ['WordPress', 'SQL', 'PHP', 'Plugins', 'Thèmes'],
      favorite: true,

    },
    {
      imageUrl: 'path/to/image4.jpg',
      name: 'Project 4',
      intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      technologies: ['Angular', 'TypeScript', 'HTML'],
      favorite: true,

    }
  ];

  getTopProjects(): Project[] {
    return this.projects.filter(project => project.favorite).slice(0, 4);
  }
}

interface Project {
  imageUrl: string;
  name: string;
  intro: string;
  technologies: string[];
  favorite: boolean;

}
