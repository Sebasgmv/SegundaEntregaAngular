import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit{
  conductores: Conductor[] | undefined;

  constructor(private conductorService: ConductorService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    this.conductorService.findAll().subscribe( conductores => this.conductores = conductores);
  }

  viewConductor(conductor: Conductor): void{
    if (conductor && conductor.id) {
      this.router.navigate(['/conductor/view', conductor.id]);
    }
  }
  editConductor(conductor: Conductor): void{
    if (conductor && conductor.id) {
      this.router.navigate(['/conductor/edit', conductor.id]);
    }
  }

}
