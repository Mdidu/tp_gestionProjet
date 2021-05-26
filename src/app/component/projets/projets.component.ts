import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetsService } from 'src/app/service/projets/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  triByDateForm: FormGroup;
  projets: any;

  constructor(private formBuilder: FormBuilder, public projetService: ProjetsService) {
      this.displayProjet();
     }

  ngOnInit(): void {
    this.triByDateForm = this.formBuilder.group({
      datedebut: ['', Validators.required],
      datefinestimee: ['', Validators.required]
    });
  }

  displayProjet() {
    this.projets = this.projetService.findAll().subscribe(
      (projets) => {
        this.projets = projets;
      },
      (error) => {
        console.log("error=" + error.message);
      }
    );
  }

  onRemoveProjet(id: number) {
    this.projetService.remove(id);

    setTimeout(
      () => {
        this.displayProjet();
      }, 1000);
  }
  onSubmit() {
    const data = this.triByDateForm.value;
    this.projets = this.projetService.findByDate(data.datedebut, data.datefinestimee).subscribe(
      (projets) => {
        console.log(projets);
        this.projets = projets;
      },
      (error) => {
        console.log("error=" + error.message);
      }
    );
    console.log("aa");
  }
}
