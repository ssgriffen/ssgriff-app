import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// will need to double check if im using all these mat modules lol.
import {
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
} from '@angular/material';

import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
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
  exports: [
    CommonModule,
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
  declarations: [],
  providers: [],
})
export class MaterialModule { }
