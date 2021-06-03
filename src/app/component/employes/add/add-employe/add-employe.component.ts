import { Projet } from './../../../../models/projet';
import { Departement } from 'src/app/models/departement';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartementsService } from 'src/app/service/departements/departements.service';
import { EmployesService } from 'src/app/service/employes/employes.service';
import { ProjetsService } from 'src/app/service/projets/projets.service';
import { RolesService } from 'src/app/service/roles/roles.service';
import { Role } from 'src/app/models/role';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  addEmployeForm: FormGroup;
  departements: any;
  projets: any;
  roles: any;
  user: User;
  depart: Departement;
  proj: Projet;
  role: Role;

  constructor(private formBuilder: FormBuilder,
    public employeService: EmployesService,
    public departementService: DepartementsService,
    public projetService: ProjetsService,
    public roleService: RolesService,
    private router: Router) { }

  ngOnInit(): void {
    this.recupDataDepartement();
    this.recupDataProjet();
    this.recupDataRole();
    this.form();
  }

  form() {
    this.addEmployeForm = this.formBuilder.group({
      mail: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      pwd: ['', Validators.required],
      iddepartement: ['', Validators.required],
      idprojet: ['', Validators.required],
      idrole: ['', Validators.required]
    });
  }

  recupDataDepartement() {
    this.departements = this.departementService.findAll().subscribe(
      (departements) => {
        this.departements = departements;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  recupDataProjet() {
    this.projets = this.projetService.findAll().subscribe(
      (projets) => {
        this.projets = projets;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  recupDataRole() {
    this.roles = this.roleService.findAll().subscribe(
      (roles) => {
        this.roles = roles;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.addEmployeForm.value;

    this.user = {
      prenom: data.prenom,
      nom: data.nom,
      mail: data.mail,
      pwd: data.pwd,
      departement: parseInt(data.iddepartement),
      projet: parseInt(data.idprojet),
      role: parseInt(data.idprojet)
    };

    this.employeService.add(this.user);
  }
}
