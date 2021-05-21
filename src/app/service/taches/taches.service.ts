import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/tache/read/"+ id)
    .map(res => {
      return res;
    });
  }

  findByModule(id: string | null) {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/tache/module/"+ id)
    .map(res => {
      return res;
    });
  }

  public findAll() {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/tache/read")
    .map(res => {
      return res;
    })
  }

  public add(data: any) {
    return this.http.post("http://localhost:8082/gestionProjetBack/tache/add", data).subscribe(
      () => {
        this.router.navigate(['tache/list']);
      }
    );
  }

  public update(data: any) {
    return this.http.put("http://localhost:8082/gestionProjetBack/tache/update", data).subscribe(
      () => {
        this.router.navigate(['tache/list']);
      }
    );
  }

  // public remove(id: number) {
  //   return this.http.delete("http://localhost:8082/gestionProjetBack/tache/delete/" + id).subscribe(
  //     () => {}
  //   );
  // }
}
