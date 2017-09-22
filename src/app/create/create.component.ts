import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ApiService } from '../services/api.service' 
import { SnackbarService } from '../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  title: string;
  content: string;
  date: string;
  
  constructor(
    private fb: FormBuilder,
    private api_service: ApiService,
    private snackbar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({  
      'title': [null,Validators.required],
      'content': [null,Validators.required],
      'date': [null,Validators.required],
      // 'pic': [null],
    });
  }

  onSubmit(){
    // console.log(this.createForm.value);
    this.api_service.createPost(this.createForm.value).subscribe(
      data => this.goodPost(data),
      err => this.snackbar.snackBarErrGen("Can't create post atm...", "", 2000, err)
    )
  }

  goodPost(data){
    if(data.result){
      this.snackbar.snackBarSuccGen("Success!", "", 2000);
      this.router.navigateByUrl("/blogs");
    } else {
      this.snackbar.snackBarErrGen("Can't create post atm...", "", 2000, data)
    }
  }

}
