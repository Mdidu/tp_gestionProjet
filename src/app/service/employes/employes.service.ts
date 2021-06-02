import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

const BASE_URI = 'http://localhost:8082/gestionProjetBack/employe/';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient, private router: Router) {
  }

  public findById(id: string | null) {
    return this.http.get<any>(BASE_URI + "read/"+ id)
    .map(res => {
      return res;
    });
  }

  findByProjet(id: string | null) {
    return this.http.get<any>(BASE_URI + "projet/"+ id)
    .map(res => {
      return res;
    });
  }

  public findAll() {
    return this.http.get<any>(BASE_URI + "read")
    .map(res => {
      return res;
    });
  }

  public add(data: any) {
    return this.http.post(BASE_URI + "add", data).subscribe(
      () => {
        this.router.navigate(['employe/list']);
      }
    );
  }

  public update(data: any) {
    return this.http.put(BASE_URI + "update", data).subscribe(
      () => {
        this.router.navigate(['employe/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(BASE_URI + "delete/" + id).subscribe(
      () => { }
    );
  }
}
