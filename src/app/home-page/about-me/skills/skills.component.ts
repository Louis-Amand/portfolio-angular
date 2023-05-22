import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  isSectionExpanded: boolean[] = [false, false, false];

  ngOnInit(): void {
    const accordions = document.getElementsByClassName('accordion');

    for (let i = 0; i < accordions.length; i++) {
      const accordion = accordions[i] as HTMLElement;
      accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling as HTMLElement;
        if (panel.style.display === 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
        }
      });
    }
  }

  toggleSection(index: number): void {
    this.isSectionExpanded[index] = !this.isSectionExpanded[index];
  }
}
