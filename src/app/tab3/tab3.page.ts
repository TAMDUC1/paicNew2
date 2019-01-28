import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';

const headerDict = {
    'Content-Type': 'application/json',
};

const httpOptions = {
    headers: new HttpHeaders(headerDict)
};
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    message: string = "";
    data1 = {
        "uid": null,
        "tieuchi1": null,
        "tieuchi2": null,
        "tieuchi3": null,
        "comment": null,
        "hinhanh": null,
        "ngaydang": null
    } ;
    constructor(public httpClient : HttpClient){

    }

    sendPostRequest(){

        return this.httpClient.post('https://thunghiemcsdl.paic.pvn.vn/api/CMS_IONIC/PostCMS_IONIC',this.data1,httpOptions)
            .subscribe(
                data => {console.log("successfull", data);
                    this.message ="Bạn Đã Gửi Thành Công" },
                error =>{console.log("error",error)}
            )
            ;

    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}
