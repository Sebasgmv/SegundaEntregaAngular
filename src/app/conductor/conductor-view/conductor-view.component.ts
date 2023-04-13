import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";
import {switchMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-conductor-view',
  templateUrl: './conductor-view.component.html',
  styleUrls: ['./conductor-view.component.css']
})
export class ConductorViewComponent implements OnInit{

  conductor: Conductor = new Conductor()

  constructor(private conductorService: ConductorService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params =>
        this.conductorService.recuperarConductor(+params.get('id')!)
      // this.personService.findById(+(params.get('id') || 1))

    )).subscribe(conductor => this.conductor = conductor);

    /*this.conductorService.recuperarConductor().subscribe(
      conductor => this.conductor = conductor);*/
  }

}
