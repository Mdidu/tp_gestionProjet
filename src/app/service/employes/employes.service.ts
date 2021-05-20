import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient) { }

  public findById(id: string | null) {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/employe/read/"+ id)
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
  }

  public findAll() {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/employe/read")
    .map(res => {
      return res;
    });
  }

  public add(data: any) {
    return this.http.post("http://localhost:8082/gestionProjetBack/employe/add", data).subscribe(
      () => {
        // ce rediriger vers la page liste
        console.log("yes");
      }
    );
  }

  public update(data: any) {
    return this.http.put("http://localhost:8082/gestionProjetBack/employe/update", data).subscribe(
      () => {
        // ce rediriger vers la page liste
        console.log(data);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete("http://localhost:8082/gestionProjetBack/employe/delete/" + id).subscribe(
      () => {
        console.log("yes");
      }
    );
  }
}
