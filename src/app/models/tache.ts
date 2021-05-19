import * as Module from "module";

export class Tache {
  id: number;
  libelle: string;
  dateDebut: Date;
  dateFinEstimee: Date;
  dateFinReel: Date;
  module: Module;
}
