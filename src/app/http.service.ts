import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //Api url's
  public static readonly DRIVERS_URL: string = 'https://f12020-79ecc-default-rtdb.europe-west1.firebasedatabase.app/.json';

  constructor(private http: HttpClient) { }

  public get(url: string): any {
    return this.http.get(url);
  }

}
