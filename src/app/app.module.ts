import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './component/employes/employes.component';
import { ProjetsComponent } from './component/projets/projets.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { DepartementsComponent } from './component/departements/departements.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { UpdateDepartementComponent } from './component/departements/update/update-departement/update-departement.component';
import { AddProjetComponent } from './component/projets/add/add-projet/add-projet.component';
import { UpdateProjetComponent } from './component/projets/update/update-projet/update-projet.component';
import { AddEmployeComponent } from './component/employes/add/add-employe/add-employe.component';
import { UpdateEmployeComponent } from './component/employes/update/update-employe/update-employe.component';
import { AddDepartementComponent } from './component/departements/add/add-departement/add-departement.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found/not-found.component';
import { InfoProjetComponent } from './component/info-projet/info-projet/info-projet.component';
import { InfoModuleComponent } from './component/info-module/info-module/info-module.component';
import { AddModuleComponent } from './component/modules/add-module/add-module.component';
import { UpdateModuleComponent } from './component/modules/update-module/update-module.component';
import { AddTacheComponent } from './component/taches/add-tache/add-tache.component';
import { UpdateTacheComponent } from './component/taches/update-tache/update-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    ProjetsComponent,
    AgendaComponent,
    DepartementsComponent,
    LoginComponent,
    MenuComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    HomeComponent,
    NotFoundComponent,
    InfoProjetComponent,
    InfoModuleComponent,
    AddModuleComponent,
    UpdateModuleComponent,
    AddTacheComponent,
    UpdateTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
