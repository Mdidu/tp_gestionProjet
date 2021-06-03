import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URI = 'http://localhost:8082/gestionProjetBack/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(BASE_URI + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(BASE_URI + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  setAuthenticated(authenticated: boolean) {
    this.isLoggedIn = authenticated;
  }
}
