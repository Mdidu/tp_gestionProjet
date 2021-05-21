import { LoginComponent } from './component/login/login.component';
import { DepartementsComponent } from './component/departements/departements.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { ProjetsComponent } from './component/projets/projets.component';
import { EmployesComponent } from './component/employes/employes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './component/departements/add/add-departement/add-departement.component';
import { UpdateDepartementComponent } from './component/departements/update/update-departement/update-departement.component';
import { AddProjetComponent } from './component/projets/add/add-projet/add-projet.component';
import { UpdateProjetComponent } from './component/projets/update/update-projet/update-projet.component';
import { AddEmployeComponent } from './component/employes/add/add-employe/add-employe.component';
import { UpdateEmployeComponent } from './component/employes/update/update-employe/update-employe.component';
import { NotFoundComponent } from './component/not-found/not-found/not-found.component';
import { HomeComponent } from './component/home/home/home.component';
import { InfoProjetComponent } from './component/info-projet/info-projet/info-projet.component';
import { InfoModuleComponent } from './component/info-module/info-module/info-module.component';
import { UpdateModuleComponent } from './component/modules/update-module/update-module.component';
import { UpdateTacheComponent } from './component/taches/update-tache/update-tache.component';
import { AddModuleComponent } from './component/modules/add-module/add-module.component';
import { AddTacheComponent } from './component/taches/add-tache/add-tache.component';

const routes: Routes = [
  { path: 'employe/list', component: EmployesComponent},
  { path: 'employe/add', component: AddEmployeComponent},
  { path: 'employe/update/:id', component: UpdateEmployeComponent},
  { path: 'projet/list', component: ProjetsComponent},
  { path: 'projet/add', component: AddProjetComponent},
  { path: 'projet/update/:id', component: UpdateProjetComponent},
  { path: 'projet/:id', component: InfoProjetComponent},
  { path: 'projet/:id/module/:idModule', component: InfoModuleComponent},
  { path: 'projet/:id/module/:idModule/tache/update/:idTache', component: UpdateTacheComponent},
  { path: 'projet/:id/module/update/:idmodule', component: UpdateModuleComponent},
  { path: 'departement/list', component: DepartementsComponent},
  { path: 'departement/add', component: AddDepartementComponent},
  { path: 'departement/update/:id', component: UpdateDepartementComponent},
  { path: 'module/add', component: AddModuleComponent},
  { path: 'tache/add', component: AddTacheComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
