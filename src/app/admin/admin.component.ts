import { Component, OnInit, isDevMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {SnackbarService } from '../services/snackbar.service';

declare var window: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;
  password: string;
  
  constructor(
    private fb: FormBuilder,
    private api_service: ApiService,
    private snackbar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.adminForm = this.fb.group({  
      'password': [null,Validators.required]
    }); 
  }

  onSubmit(){

    this.api_service.signin(this.adminForm.value).subscribe(
      data => this.handleData(data),
      err => this.snackbar.snackBarErrGen("Can't connect to server atm >_>", "", 1500, err)
    );

  }

  handleData(data: any){
    if(data.result){
      let url: string = '';

      if(isDevMode()){
        url = "http://localhost:4200/";
      } else {
        url = "https://ssgriff-webview.herokuapp.com/"
      }

      window.location = url;

    } else {
      this.snackbar.snackBarSuccGen("Wrong Password >_>", "", 1500);
    }
  }

}