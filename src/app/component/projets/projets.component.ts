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
      projetService.findAll().subscribe(
        (projets) => {
          this.projets = projets;
        },
        (error) => {
          console.log("error=" + error.message);
        }
      );
     }

  ngOnInit(): void {
  }

}
