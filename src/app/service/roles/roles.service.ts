import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URI = 'http://localhost:8082/gestionProjetBack/role/';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<any>(BASE_URI + "read")
    .map(res => {
      return res;
    })
  }
}
