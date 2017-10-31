import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatRadioModule, MatSliderModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatListModule, MatIconModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatCardModule, MatCommonModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
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
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartModule,
    MatSnackBarModule, 
    MatTabsModule, 
    MatButtonModule,
    MatCommonModule, 
    MatDialogModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatFormFieldModule, 
    MatInputModule,
    MatStepperModule,
    MatSliderModule,
    MatRadioModule
  ],
  providers: [
    GlobalService,
    ApiService,
    SnackbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
