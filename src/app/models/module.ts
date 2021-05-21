import { Projet } from "./projet";

export class Module {
  id?: number;
  nom?: string;
  dateDebut?: Date;
  dateFinEstimee?: Date;
  dateFinReel?: Date;
  projet?: Projet;
}
