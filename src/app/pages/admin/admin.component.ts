import { Component, OnInit, isDevMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router} from '@angular/router';
import {SnackbarService } from '../../services/snackbar.service';

declare var window: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;
  password: string;
  final_dest: string;
  prev_url: string;

  constructor(
    private fb: FormBuilder,
    private api_service: ApiService,
    private snackbar: SnackbarService,
    private router: Router,
  ) {}

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

  handleData(data: any): void {
    if(data.result){
      let url: string = '';

      //doing this b/c safari doesnt like cookies from server... >_>
      localStorage.setItem('admin', 'true');

      if(isDevMode()){
        url = "http://localhost:4200/";
      } else {
        url = "https://samgriffen.com/"
      }

      window.location = url;

    } else {
      this.snackbar.snackBarSuccGen("Wrong Password >_>", "", 1500);
    }
  }

}
