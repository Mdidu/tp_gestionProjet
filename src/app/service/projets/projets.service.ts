import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http: HttpClient) { }

  /*public findById(id) {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/projet/read/"+ id)
    .map(res => {
      return res;
    });
    // .subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (error) => {
    //     console.log("error=" + error.message);
    //   }
    // );
  }*/

  public findAll() {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/projet/read")
    .map(res => {
      console.log(res);
      return res;
    })
  }
}
