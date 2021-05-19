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
import { DeleteEmployeComponent } from './component/employes/delete/delete-employe/delete-employe.component';
import { DeleteProjetComponent } from './component/projets/delete/delete-projet/delete-projet.component';
import { DeleteDepartementComponent } from './component/departements/delete/delete-departement/delete-departement.component';

const routes: Routes = [
  { path: 'employe/list', component: EmployesComponent},
  { path: 'employe/add', component: AddEmployeComponent},
  { path: 'employe/update/:id', component: UpdateEmployeComponent},
  { path: 'employe/delete/:id', component: DeleteEmployeComponent},
  { path: 'projet/list', component: ProjetsComponent},
  { path: 'projet/add', component: AddProjetComponent},
  { path: 'projet/update/:id', component: UpdateProjetComponent},
  { path: 'projet/delete/:id', component: DeleteProjetComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'departement/list', component: DepartementsComponent},
  { path: 'departement/add', component: AddDepartementComponent},
  { path: 'departement/update/:id', component: UpdateDepartementComponent},
  { path: 'departement/delete/:id', component: DeleteDepartementComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
