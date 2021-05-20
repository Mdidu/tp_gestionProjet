import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/employe/read/"+ id)
    .map(res => {
      return res;
    });
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
        this.router.navigate(['employe/list']);
      }
    );
  }

  public update(data: any) {
    return this.http.put("http://localhost:8082/gestionProjetBack/employe/update", data).subscribe(
      () => {
        this.router.navigate(['employe/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete("http://localhost:8082/gestionProjetBack/employe/delete/" + id).subscribe(
      () => { }
    );
  }
}
