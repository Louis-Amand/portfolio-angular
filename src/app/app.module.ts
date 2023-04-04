import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ChipModule } from 'primeng/chip';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { ContactPageComponent } from './contact-us/contact-page/contact-page.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';


// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackgroundComponent } from './home-page/background/background.component';
import { AboutMeComponent } from './home-page/about-me/about-me.component';
import { TimelineComponent } from './home-page/about-me/timeline/timeline.component';
import { GeneralInfoComponent } from './home-page/about-me/general-info/general-info.component';


@NgModule({
  declarations: [

    FooterComponent,
    HeaderComponent,
    ArticlesListComponent,
    HomePageComponent,
    ContactPageComponent,
    ProjectsListComponent,
    BackgroundComponent,
    AboutMeComponent,
    AppComponent,
    TimelineComponent,
    GeneralInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DividerModule,
    ChipModule,
    MenubarModule,
    HttpClientModule,
    CardModule,
    TimelineModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}