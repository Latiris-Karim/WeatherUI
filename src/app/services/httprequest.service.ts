import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttprequestService {
  private baseURL = environment.apiUrl;

 
 
 
  constructor(private http: HttpClient) {}
 
  get(uri: string, options?: { params?: HttpParams; headers?: HttpHeaders }): Observable<any> {
    return this.http.get(`${this.baseURL}/${uri}`, options);
  }
 
  post(uri: string, payload: Object) {
    return this.http.post(`${this.baseURL}/${uri}`, payload, { withCredentials: true });
  }
 
  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.baseURL}/${uri}`, payload, { withCredentials: true });
  }
 
  delete(uri: string) {
    return this.http.delete(`${this.baseURL}/${uri}`, { withCredentials: true });
  }

}


