import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Departement } from 'src/app/models/departement';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  // public departement: Departement;

  constructor(private http: HttpClient) { }

  public findById(id: string | null) {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/departement/read/"+ id)
    .map(res => {
      return res;
    });
  }

  public findAll() {
    return this.http.get("http://localhost:8082/gestionProjetBack/departement/read")
    .map(res => {
      return res;
    });
  }

  public add(data: any) {
    return this.http.post("http://localhost:8082/gestionProjetBack/departement/add", data).subscribe(
      () => {
        // ce rediriger vers la page liste
        console.log("yes");
      }
    );
  }

  public update(data: any) {
    return this.http.put("http://localhost:8082/gestionProjetBack/departement/update", data).subscribe(
      () => {
        // ce rediriger vers la page liste
        console.log(data);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete("http://localhost:8082/gestionProjetBack/departement/delete/" + id).subscribe(
      () => {
        console.log("yes");
      }
    );
  }

}
