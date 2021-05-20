import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/projet/read/"+ id)
    .map(res => {
      return res;
    });
  }

  public findAll() {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/projet/read")
    .map(res => {
      return res;
    })
  }

  public add(data: any) {
    return this.http.post("http://localhost:8082/gestionProjetBack/projet/add", data).subscribe(
      () => {
        this.router.navigate(['projet/list']);
      }
    );
  }

  public update(data: any) {
    return this.http.put("http://localhost:8082/gestionProjetBack/projet/update", data).subscribe(
      () => {
        this.router.navigate(['projet/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete("http://localhost:8082/gestionProjetBack/projet/delete/" + id).subscribe(
      () => {}
    );
  }
}
