import { Component, OnInit } from '@angular/core';
import { EmployesService } from 'src/app/service/employes/employes.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employes: any;

  constructor(public employeService: EmployesService) {
      this.displayEmploye();
     }

  ngOnInit(): void {
  }

  displayEmploye() {

    this.employes = this.employeService.findAll().subscribe(
      (employes) => {
        this.employes = employes;
      },
      (error) => {
        console.log("error=" + error.message);
      }
    );
  }

  onRemoveEmploye(id: number) {
    this.employeService.remove(id);

    setTimeout(
      () => {
        this.displayEmploye();
      }, 1000);
  }
}
