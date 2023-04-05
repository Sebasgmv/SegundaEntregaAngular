import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";

@Component({
  selector: 'app-conductor-view',
  templateUrl: './conductor-view.component.html',
  styleUrls: ['./conductor-view.component.css']
})
export class ConductorViewComponent implements OnInit{

  conductor: Conductor = new Conductor(0, "","", "", "")

  constructor(private conductorService: ConductorService) {
  }

  ngOnInit(): void {
    this.conductorService.recuperarConductor(1).subscribe(
      conductor => this.conductor = conductor);
  }

}
