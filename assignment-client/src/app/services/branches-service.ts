import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http: HttpClient) { }

  private apiUrl = "https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json";

  getBranchesDate(): Observable<any> {  
    return this.http.get<any>(this.apiUrl);
  }
}
