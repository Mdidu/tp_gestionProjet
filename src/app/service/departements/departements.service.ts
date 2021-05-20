import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  constructor(private http: HttpClient, private router: Router) { }

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
        this.router.navigate(['departement/list']);
      }
    );
  }

  public update(data: any) {
    return this.http.put("http://localhost:8082/gestionProjetBack/departement/update", data).subscribe(
      () => {
        this.router.navigate(['departement/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete("http://localhost:8082/gestionProjetBack/departement/delete/" + id).subscribe(
      () => {}
    );
  }

}
