import { Injectable } from '@angular/core';
import { MdSnackBar, MdDialog, MdDialogRef, MdSnackBarConfig, MdSnackBarContainer } from '@angular/material';

@Injectable()

export class SnackbarService {

    constructor(
        private snackBar: MdSnackBar
    ){}

    snackBarErrGen(body: string, close:string, dur: number, err: any){
        this.snackBar.open(body, close, {
            duration: dur,
        });
        console.log(err);
    }

    snackBarSuccGen(body: string, close: string, dur: number){
        this.snackBar.open(body, close, {
            duration: dur,
        });
    }
    
}