import {Component, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {Trabajo} from "../../model/trabajo";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {TrabajoService} from "../../shared/trabajo.service";

@Component({
  selector: 'app-trabajo-list',
  templateUrl: './trabajo-list.component.html',
  styleUrls: ['./trabajo-list.component.css']
})
export class TrabajoListComponent implements OnInit{

  trabajos: Trabajo[] | undefined;
  navigationSubscription;

  constructor(private trabajoService: TrabajoService,
              private route: ActivatedRoute,
              private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.ngOnInit()
  }
  ngOnInit(): void {
    this.trabajoService.findAll().subscribe( trabajos => this.trabajos = trabajos);
  }

}
