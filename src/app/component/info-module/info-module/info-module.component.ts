import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TachesService } from 'src/app/service/taches/taches.service';

@Component({
  selector: 'app-info-module',
  templateUrl: './info-module.component.html',
  styleUrls: ['./info-module.component.css']
})
export class InfoModuleComponent implements OnInit {

  taches: any;

  constructor(public tacheService: TachesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayTache();
  }

  displayTache() {


    const id = this.route.snapshot.paramMap.get('idModule');

    this.taches = this.tacheService.findByModule(id).subscribe(
      (taches) => {
        this.taches = taches;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }
}
