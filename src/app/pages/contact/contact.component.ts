import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  name: string;
  email: string;
  content: string;
  ran_1: number;
  ran_2: number;
  captcha_ans: number;
  captcha_inp: number;

  constructor(
    private api_service: ApiService,
    private snackbar: SnackbarService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({  
      'name': [null,Validators.required],
      "email": [null, [Validators.required, this.validEmail]],
      'content': [null,Validators.required]
    });

    this.setCaptcha()
  }

  setCaptcha(){
    this.ran_1 = Math.floor(Math.random() * 10) + 1;  
    this.ran_2 = Math.floor(Math.random() * 10) + 1;
    this.captcha_ans = this.ran_1 + this.ran_2;
  }

  onSubmit(){

    console.log(this.contactForm.value);
    this.api_service.sendEmail(this.contactForm.value).subscribe(
      data => this.goodEmail(data),
      err => this.snackbar.snackBarErrGen("Failed to send email :/", "", 2000, err)
    );
  }

  goodEmail(data) {
    console.log(data);
    if(data.result){
      this.snackbar.snackBarSuccGen("Message Successfully Sent!", "", 2000);
      this.router.navigateByUrl('/about');
    } else {
      this.snackbar.snackBarErrGen("Failed to send email :/", "", 2000, data);
    }
  }

  validEmail(c: any): any {
    let re: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(c.value) ? null : {
    validateEmail: {
          valid: false
        }
    };    
  }

}
