import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api.service' 

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() multiple: boolean = true;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(
    private http: Http,
    private api_service: ApiService
  ) {}

  ngOnInit(){

  }

  upload() {
      let inputEl: HTMLInputElement = this.inputEl.nativeElement;
      let fileCount: number = inputEl.files.length;
      let formData = new FormData();
      if (fileCount > 0) { // a file was selected
          console.log('File was selected');
          for (let i = 0; i < fileCount; i++) {
              formData.append('file[]', inputEl.files.item(i));
          }

          console.log('number of filess');
          console.log(fileCount);

          this.api_service.uploadCover(formData).subscribe(
            data => console.log(data),
            err => console.log(err)
          )
      }
  }

}
