import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class BaseApi {
    // private baseUrl = 'http://localhost/database/';
    private baseUrlLocalhost = 'http://localhost/database/?title=';

    constructor(public http: Http) {}

    private getUrlLocalhost(url: string = ''): string {
        return this.baseUrlLocalhost + url;
    }

    public getLocalhost(url: string = ''): Observable<any> {
        return this.http.get(this.getUrlLocalhost(url))
        .map((response: Response) => response.json());
    }

    // private getUrl(url: string = ''): string {
    //     return this.baseUrl + url;
    // }

    // public get(url: string = ''): Observable<any> {
    //     return this.http.get(this.getUrl(url))
    //     .map((response: Response) => response.json());
    // }

    // public post(url: string = '', data: any = {}): Observable<any> {
    //     return this.http.post(this.getUrl(url), data)
    //     .map((response: Response) => response.json());
    // }

    // public put(url: string = '', data: any = {}): Observable<any> {
    //     return this.http.put(this.getUrl(url), data)
    //     .map((response: Response) => response.json());
    // }
}
