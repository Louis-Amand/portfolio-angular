import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ContactPageComponent } from './contact-us/contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'contact-me', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
