import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/role/read")
    .map(res => {
      console.log(res);
      return res;
    })
  }
}
