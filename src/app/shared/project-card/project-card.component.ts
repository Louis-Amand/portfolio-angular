import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() imageUrl: string | undefined;
  @Input() projectName: string | undefined;
  @Input() technologies: string[] | undefined;
  @Input() favorite: boolean | undefined;
  @Input() projectIntro: string | undefined;
}
