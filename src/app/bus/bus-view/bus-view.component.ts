import {Component, OnInit} from '@angular/core';
import {Bus} from "../../model/bus";
import {BusService} from "../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-bus-view',
  templateUrl: './bus-view.component.html',
  styleUrls: ['./bus-view.component.css']
})
export class BusViewComponent implements OnInit{

  bus: Bus = new Bus()

  constructor(private busService: BusService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params =>
        this.busService.recuperarBus(+params.get('id')!)
      // this.personService.findById(+(params.get('id') || 1))

    )).subscribe(bus => this.bus = bus);
  }

  navigateToList() {
    this.router.navigate(['/bus/list']);
  }

}
