import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { DepartementsService } from 'src/app/service/departements/departements.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  departements: any;

  constructor(private formBuilder: FormBuilder, public departementService: DepartementsService) {

    this.displayDepartement();
  }

  ngOnInit(): void {
  }

  displayDepartement() {
    this.departements = this.departementService.findAll().subscribe(
      (departements) => {
        this.departements = departements;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  onRemoveDepartement(id: number) {
    this.departementService.remove(id);

    setTimeout(
      () => {

        this.displayDepartement();
      }, 1000);
  }
}
