import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/module/read/"+ id)
    .map(res => {
      return res;
    });
  }

  public findAll() {
    return this.http.get<any>("http://localhost:8082/gestionProjetBack/module/read")
    .map(res => {
      return res;
    })
  }

  public add(data: any) {
    return this.http.post("http://localhost:8082/gestionProjetBack/module/add", data).subscribe(
      () => {
        this.router.navigate(['module/list']);
      }
    );
  }

  public update(data: any) {
    return this.http.put("http://localhost:8082/gestionProjetBack/module/update", data).subscribe(
      () => {
        this.router.navigate(['module/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete("http://localhost:8082/gestionProjetBack/module/delete/" + id).subscribe(
      () => {}
    );
  }
}
