import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/models/module';
import { Tache } from 'src/app/models/tache';
import { ModulesService } from 'src/app/service/modules/modules.service';
import { TachesService } from 'src/app/service/taches/taches.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {

  updateTacheForm: FormGroup;
  tache: any;
  mod: any;
  taches: Tache;
  modules: Module;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public tacheService: TachesService,
    public moduleService: ModulesService) { }

  ngOnInit(): void {
    this.recupDataTache();
    this.recupDataModule();

    setTimeout(() => {
      this.form();
    }, 1000);

  }

  form() {
    this.updateTacheForm = this.formBuilder.group({
      idtache: [this.tache.idtache, Validators.required],
      libelle: [this.tache.libelle, Validators.required],
      datedebut: [this.tache.datedebut, Validators.required],
      datefinestimee: [this.tache.datefinestimee],
      datefinreel: [this.tache.datefinreel],
      idmodule: [this.tache.idmodule, Validators.required]
    });
  }

  recupDataTache() {
    const id = this.route.snapshot.paramMap.get('idTache');

    this.tache = this.tacheService.findById(id).subscribe(
      (tache) => {
        this.tache = tache;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  recupDataModule() {
    this.mod = this.moduleService.findAll().subscribe(
      (mod) => {
        this.mod = mod;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.updateTacheForm.value;

    this.modules = {
      idmodule: parseInt(data.idmodule)
    }

    this.taches = {
      idtache: data.idtache,
      libelle: data.libelle,
      datedebut: data.datedebut,
      datefinestimee: data.datefinestimee,
      datefinreel: data.datefinreel,
      module: this.modules
    }

    this.tacheService.update(this.taches);
  }

}
