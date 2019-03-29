import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap , map } from 'rxjs/operators';
import { Observable, from, of, throwError  } from 'rxjs';
import { INews } from '../news';
import {NetworkService, ConnectionStatus } from './network.service';
import { OfflineManagerService } from './offline-manager.service';
import { Storage } from '@ionic/storage';


const API_STORAGE_KEY = 'specialkey';
const headerDict = {
    'Accept': 'application/json',
};
let headers : HttpHeaders = new HttpHeaders();
headers.append('','');

const httpOptions = {
    headers: new HttpHeaders(headerDict)
};
@Injectable({
  providedIn: 'root'
})
export class NewsService {

    private url:string ='https://fakerestapi.azurewebsites.net/api/Books';
    private url2:string ='https://thunghiemcsdl.paic.pvn.vn/api/CMS_News';
    private url3:string ='https://thunghiemcsdl.paic.pvn.vn/api/CMS_News/c424a9af-af63-4015-aeb4-000158a09903';
    private tinbatdongsan : string ='https://thunghiemcsdl.paic.pvn.vn/api/CMS_News?categoryId=5a57b602-b4cb-41dd-a6c9-1b10d50c947f';
    private tinphapluat : string ='https://thunghiemcsdl.paic.pvn.vn/api/CMS_News?categoryId=69b31aea-0394-4b9f-a3d1-f22602cafd76';
    private tincongtrinhdaukhi : string ='https://thunghiemcsdl.paic.pvn.vn/api/CMS_News?categoryId=4840a664-fab1-4db2-8bae-49adead5b903';
  constructor(private Http: HttpClient, private networkService: NetworkService, private storage: Storage, private offlineManager: OfflineManagerService) {

  }

    getNews(): Observable<INews[]>{
        return this.Http.get<INews[]>(this.url, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
            ;
    }
    getNews2(forceRefresh: boolean = false): Observable<INews[]>{
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
            // Return the cached data from Storage
            return from(this.getLocalData('news'));
        } else{
            return this.Http.get<INews[]>(this.url2, httpOptions,)
                .pipe(
                    tap(res =>{
                        this.setLocalData('news', res);
                    }),
                    catchError(this.handleError)
                )
                ;
        }

    }
    getNewBDS(forceRefresh: boolean = false): Observable<INews[]>{

        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
            // Return the cached data from Storage
            return from(this.getLocalData('newsbds'));
        } else{
            return this.Http.get<INews[]>(this.tinbatdongsan, httpOptions,)
                .pipe(
                    tap(res =>{
                        this.setLocalData('newsbds', res);
                    }),
                    catchError(this.handleError)
                )
                ;
        }

    }
    getNewsPhapLuat(forceRefresh: boolean = false): Observable<INews[]>{
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
            // Return the cached data from Storage
            return from(this.getLocalData('newspl'));
        }
        else{
            return this.Http.get<INews[]>(this.tinphapluat, httpOptions,)
                .pipe(
                    tap( res => {
                        this.setLocalData('newspl', res);
                    }),
                    catchError(this.handleError)
                )
                ;
        }

    }
    getNewsCongTrinhDauKhi(forceRefresh: boolean = false): Observable<INews[]>{
        if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
            // Return the cached data from Storage
            return from(this.getLocalData('newsctdk'));
        } else {
            return this.Http.get<INews[]>(this.tincongtrinhdaukhi, httpOptions,)
                .pipe(
                    tap(res =>{
                        this.setLocalData('newsctdk', res);
                    }),
                    catchError(this.handleError)
                )
                ;
        }

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

    private setLocalData(key, data) {
        this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
    }

    private getLocalData(key) {
        return this.storage.get(`${API_STORAGE_KEY}-${key}`);
    }
}
