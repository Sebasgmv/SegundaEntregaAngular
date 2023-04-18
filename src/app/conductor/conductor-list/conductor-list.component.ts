import {Component, OnDestroy, OnInit} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit, OnDestroy{
  conductores: Conductor[] | undefined;

  navigationSubscription;
  constructor(private conductorService: ConductorService,
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
  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.conductorService.findAll().subscribe( conductores => this.conductores = conductores);
  }

  CrearConductor(){
    this.router.navigate(['/conductor/create']);
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

  deleteConductor(conductor: Conductor): void{
    if (conductor && conductor.id) {
      this.conductorService.eliminarConductor(conductor.id).subscribe({
        next: dato => console.log(dato),
        error: msg => {
          console.error("Hubo un error:");
          console.error(msg);
        }
      });
    }
    this.router.navigate(['/conductor/list']);
  }

  busesConductor(conductor: Conductor): void{
    if (conductor && conductor.id) {
      this.router.navigate(['/trabajo/view', conductor.id]);
    }
  }

}
