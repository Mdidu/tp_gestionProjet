import { LoginComponent } from './component/login/login.component';
import { DepartementsComponent } from './component/departements/departements.component';
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
import { AuthGuard } from './guard/auth/auth.guard';

const routes: Routes = [
  { path: 'employe/list', component: EmployesComponent, canActivate: [AuthGuard]},
  { path: 'employe/add', component: AddEmployeComponent, canActivate: [AuthGuard]},
  { path: 'employe/update/:id', component: UpdateEmployeComponent, canActivate: [AuthGuard]},
  { path: 'projet/list', component: ProjetsComponent, canActivate: [AuthGuard]},
  { path: 'projet/add', component: AddProjetComponent, canActivate: [AuthGuard]},
  { path: 'projet/update/:id', component: UpdateProjetComponent, canActivate: [AuthGuard]},
  { path: 'projet/:id', component: InfoProjetComponent, canActivate: [AuthGuard]},
  { path: 'projet/:id/module/:idModule', component: InfoModuleComponent, canActivate: [AuthGuard]},
  { path: 'projet/:id/module/:idModule/tache/update/:idTache', component: UpdateTacheComponent, canActivate: [AuthGuard]},
  { path: 'projet/:id/module/update/:idModule', component: UpdateModuleComponent, canActivate: [AuthGuard]},
  { path: 'departement/list', component: DepartementsComponent, canActivate: [AuthGuard]},
  { path: 'departement/add', component: AddDepartementComponent, canActivate: [AuthGuard]},
  { path: 'departement/update/:id', component: UpdateDepartementComponent, canActivate: [AuthGuard]},
  { path: 'module/add', component: AddModuleComponent, canActivate: [AuthGuard]},
  { path: 'tache/add', component: AddTacheComponent, canActivate: [AuthGuard]},
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
