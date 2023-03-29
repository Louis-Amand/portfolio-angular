import { isNgContainer } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Curriculum Vitae',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Qui suis-je ?',
                        icon: 'pi pi-fw pi-comments',

                    },
                    {
                        label: 'Mes compétences',
                        icon: 'pi pi-fw pi-bolt',

                    },

                ],

            },
            {
                label: 'Mes projets',
                icon: 'pi pi-fw pi-folder',
            },
            {
                label: 'Mes rédactions',
                icon: 'pi pi-fw pi-pencil',
            },
            {
                label: 'Me contacter',
                icon: 'pi pi-fw pi-send',
            },
            {
                label: "",
                icon: "pi pi-user"
            }
        ];
    }
}