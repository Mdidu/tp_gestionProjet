import { Departement } from './departement';
import { Projet } from './projet';
import { Role } from './role';

export class Employe {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  pwd: string;
  departement:Departement;
  projet: Projet;
  role: Role;
}
