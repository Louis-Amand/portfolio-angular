import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslationService } from 'src/app/translation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] = [];
    private menubarData: any;

    constructor(private translationService: TranslationService) { }

    ngOnInit() {
        this.translationService.translate.onLangChange.subscribe(() => {
            this.translationService.translate
                .get('shared.header.menubar')
                .subscribe((data: any) => {
                    this.menubarData = data;
                    this.initMenuItem();
                });
        });
    }

    initMenuItem() {
        this.items = [
            {
                label: this.menubarData.cv,
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: this.menubarData.whoami,
                        icon: 'pi pi-fw pi-comments',
                        routerLink: '#about-me',
                    },
                    {
                        label: this.menubarData.skills,
                        icon: 'pi pi-fw pi-bolt',
                        routerLink: '#skills',
                    },
                ],
            },
            {
                label: this.menubarData.projects,
                icon: 'pi pi-fw pi-folder',
                routerLink: '/projects',
            },
            {
                label: this.menubarData.articles,
                icon: 'pi pi-fw pi-pencil',
                routerLink: '/articles',
            },
            {
                label: this.menubarData.contact,
                icon: 'pi pi-fw pi-send',
                routerLink: '/contact-me',
            },
            {
                label: '',
                icon: 'pi pi-cog',
                items: [

                    {
                        label: this.menubarData.language.french,
                        command: () => {
                            this.translationService.switchLanguage('fr');
                        },
                    },
                    {
                        label: this.menubarData.language.english,
                        command: () => {
                            this.translationService.switchLanguage('en');
                        },
                    },
                    {
                        label: this.menubarData.language.russian,
                        command: () => {
                            this.translationService.switchLanguage('ru');
                        },
                    },
                    {
                        separator: true,
                    },
                    {
                        label: this.menubarData.theme.light,
                        icon: 'pi pi-fw pi-sun',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: this.menubarData.dyslexia,
                        icon: 'pi pi-fw pi-pound',
                    },
                    {
                        label: this.menubarData.daltonism,
                        icon: 'pi pi-fw pi-eye',
                    },
                ]
            },
        ];
    }

    public changeLanguage(lang: string) {
        if (this.translationService.translate.currentLang != lang) {
            this.translationService.switchLanguage(lang);
        }
    }
}
