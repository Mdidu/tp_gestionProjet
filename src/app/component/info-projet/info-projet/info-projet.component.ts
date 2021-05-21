import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from 'src/app/service/employes/employes.service';
import { ModulesService } from 'src/app/service/modules/modules.service';

@Component({
  selector: 'app-info-projet',
  templateUrl: './info-projet.component.html',
  styleUrls: ['./info-projet.component.css']
})
export class InfoProjetComponent implements OnInit {

  employes: any;
  modules: any;

  constructor(public employeService: EmployesService,
    public moduleService: ModulesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayEmploye();
    this.displayModule();
  }

  displayEmploye() {

    const id = this.route.snapshot.paramMap.get('id');

    this.employes = this.employeService.findByProjet(id).subscribe(
      (employes) => {
        this.employes = employes;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  displayModule() {

    const id = this.route.snapshot.paramMap.get('id');

    this.modules = this.moduleService.findByProjet(id).subscribe(
      (modules) => {
        this.modules = modules;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }
}
