import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { ChartModule } from 'angular2-chartjs';

import { AppRoutingModule } from './app.routing.module';
import { GlobalService } from './services/global.service';
import { ApiService } from './services/api.service';
import { SnackbarService } from './services/snackbar.service';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogsComponent } from './blogs/blogs.component';
import { StackComponent } from './stack/stack.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { CreateComponent } from './create/create.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    BlogsComponent,
    StackComponent,
    ContactComponent,
    AdminComponent,
    BlogComponent,
    CreateComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ChartModule
    
  ],
  providers: [
    GlobalService,
    ApiService,
    SnackbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
