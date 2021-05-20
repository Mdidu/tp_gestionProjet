import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartementsService } from 'src/app/service/departements/departements.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {

  updateDepartementForm: FormGroup;
  departement: any;

  constructor(private formBuilder: FormBuilder,
    public departementService: DepartementsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recupData();

    setTimeout(() => {
      this.form();
    }, 1000);

  }

  form() {
    this.updateDepartementForm = this.formBuilder.group({
      iddepartement: [this.departement.iddepartement, Validators.required],
      libelle: [this.departement.libelle, Validators.required]
    });
  }
  recupData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.departement = this.departementService.findById(id).subscribe(
      (departement) => {
        this.departement = departement;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.updateDepartementForm.value;
    this.departementService.update(data);
  }
}
