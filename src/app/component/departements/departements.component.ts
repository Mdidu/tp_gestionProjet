import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartementsService } from 'src/app/service/departements/departements.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  // supprimerDepartementForm: FormGroup;
  // @Input() iddepartement: any;
  departements: any;

  constructor(private formBuilder: FormBuilder, public departementService: DepartementsService) {

    this.displayDepartement();
  }

  ngOnInit(): void {
    // this.supprimerDepartementForm =this.formBuilder.group({
    //   iddepartement: [this.iddepartement, Validators.required]
    // });
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
