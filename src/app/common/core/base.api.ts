import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class BaseApi {

    private baseUrl = 'http://drzp.tmp/';

    constructor(public http: HttpClient) {}

    public get(url: string = ''): Observable<any> {
        return this.http.get(this.getUrl(url));
        // .map((response: Response) => response.json());
    }

    public getById(url: string = '', id: string): Observable<any> {
        return this.http.get(this.getUrl(url) + '/' + id);
        // .map((response: Response) => response.json());
    }

    private getUrl(url: string = ''): string {
        return this.baseUrl + url;
    }

    // public post(url: string = '', data: any = {}): Observable<any> {
    //     return this.http.post(this.getUrl(url), data)
    //     .map((response: Response) => response.json());
    // }

    // public put(url: string = '', data: any = {}): Observable<any> {
    //     return this.http.put(this.getUrl(url), data)
    //     .map((response: Response) => response.json());
    // }
}
