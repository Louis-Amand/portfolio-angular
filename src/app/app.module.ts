import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { ContactPageComponent } from './contact-us/contact-page/contact-page.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ArticlesListComponent,
    HomePageComponent,
    ContactPageComponent,
    ProjectsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
