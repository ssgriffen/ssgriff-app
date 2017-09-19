import { NgModule, OnInit }              from '@angular/core';
import { RouterModule, Routes, CanActivate, Resolve}  from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { BlogsComponent } from './blogs/blogs.component';
import { StackComponent } from './stack/stack.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'blogs', component: BlogsComponent},
  { path: 'blog/:slug', component: BlogComponent},
  { path: 'stack', component: StackComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent},
  { path: '',   redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about'}
];
@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
