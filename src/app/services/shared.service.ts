import {BehaviorSubject, Observable} from 'rxjs';

export class SharedService {
    private readonly ad = new BehaviorSubject<any>(null);
    private readonly ads = new BehaviorSubject<any>(null);
    private readonly user = new BehaviorSubject<any>(null);

    constructor() {
    }

    getAd(): Observable<any> {
        return this.ad;
    }

    setAd(ad: any): void {
        this.ad.next(ad);
    }

    getUser(): Observable<any> {
        return this.user;
    }

    setUser(user: any): void{
        this.user.next(user);
    }

    getAllAds(): Observable<any> {
        return this.ads;
    }

    setAllAds(ads: any): void {
        this.ads.next(ads);
    }
}
