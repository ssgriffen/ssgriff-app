import { NgModule, OnInit }              from '@angular/core';
import { RouterModule, Routes, CanActivate, Resolve}  from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component'
import { PortfolioComponent } from './pages/portfolio/portfolio.component'
import { BlogsComponent } from './pages/blogs/blogs.component';
import { StackComponent } from './pages/stack/stack.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CreateComponent } from './pages/create/create.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'blogs', component: BlogsComponent},
  { path: 'blog/:slug', component: BlogComponent},
  { path: 'create', component: CreateComponent},
  { path: 'create/:slug', component: CreateComponent},
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
