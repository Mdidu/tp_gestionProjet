import { Component, OnInit } from '@angular/core';
import { ProjetsService } from 'src/app/service/projets/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projets: any;

  constructor(public projetService: ProjetsService) {
      this.displayProjet();
     }

  ngOnInit(): void {
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
}
