import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

const BASE_URI = 'http://localhost:8082/gestionProjetBack/projet/';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {

    return this.http.get<any>(BASE_URI + "read/"+ id)
    .map(res => {
      return res;
    });
  }

  public findByDate(dateDebut: Date, dateFin: Date) {
    return this.http.get<any>(BASE_URI + "read/date/dateDebut/" + dateDebut + "/dateFin/" + dateFin)
    .map(res => {
      return res;
    });
  }

  public findAll() {
    return this.http.get<any>(BASE_URI + "read")
    .map(res => {
      return res;
    })
  }

  public add(data: any) {
    return this.http.post(BASE_URI + "add", data).subscribe(
      () => {
        this.router.navigate(['projet/list']);
      }
    );
  }

  public update(data: any) {
    return this.http.put(BASE_URI + "update", data).subscribe(
      () => {
        this.router.navigate(['projet/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(BASE_URI + "delete/" + id).subscribe(
      () => {}
    );
  }
}
