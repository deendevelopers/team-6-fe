
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) { }

    // TODO
    configUrl = "https://home-buddy-team6.herokuapp.com/"

    //user

    getConfig() {
        return this.http.get(this.configUrl);
    }


    saveGiver(giver): Observable<any> {
        return this.http.post<any>('https://home-buddy-team6.herokuapp.com/givers', giver);
    }

    getGiver(giverId): Observable<any> {
        const httpParams = new HttpParams().set('giverId', giverId.toString());
        return this.http.get<any>('https://home-buddy-team6.herokuapp.com/giver', {params: httpParams});
    }

    getGivers(): Observable<any> {
        return this.http.get<any>('https://home-buddy-team6.herokuapp.com/givers');
    }

    // saveReceiver(receiver): Observable<any> {
    //     return this.http.post<any>('/receivers', receiver);
    // }

    // getReceiver(receiverId): Observable<any> {
    //     const httpParams = new HttpParams().set('receiverId', receiverId.toString());
    //     return this.http.get<any>('/receiver', {params: httpParams});
    // }

    // getReceivers(): Observable<any>{
    //     return this.http.get<any>('/receivers');
    // }

    //ads 
    saveAd(ad): Observable<any> {
        return this.http.post<any>('https://home-buddy-team6.herokuapp.com/items', ad);
    }

    getAd(adId): Observable<any> {
        const httpParams = new HttpParams().set('adId', adId.toString());
        return this.http.get<any>('https://home-buddy-team6.herokuapp.com/item', {params: httpParams});
    }

    getAds(): Observable<any>{
        return this.http.get<any>('https://home-buddy-team6.herokuapp.com/items');
    }

}