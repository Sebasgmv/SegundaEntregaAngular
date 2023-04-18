import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Conductor} from "../../model/conductor";
import {ConductorService} from "../../shared/conductor.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Horario} from "../../model/horario";
import {HorarioService} from "../../shared/horario.service";
import {Estacion} from "../../model/estacion";

@Component({
  selector: 'app-horario-list',
  templateUrl: './horario-list.component.html',
  styleUrls: ['./horario-list.component.css']
})
export class HorarioListComponent implements OnInit, OnDestroy{
  @Input() mostrarDiv = true;
  @Input() mostrarDiv2 = false;

  @Output()
  selectionChangedHorarios = new EventEmitter<boolean[]>();

  @Output()
  horariosSelecionados= new EventEmitter<Horario[]>();

  selection: boolean[] = [];

  horariosSelecionadosUnicas: Horario[] = [];

  horarios: Horario[] = [];

  navigationSubscription;
  constructor(private horarioService: HorarioService,
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
    this.horarioService.findAll().subscribe( horarios => this.horarios = horarios);
  }

  CrearHorario(){
    this.router.navigate(['/horario/create']);
  }

  viewHorario(horario: Horario): void{
    if (horario && horario.id) {
      this.router.navigate(['/horario/view', horario.id]);
    }
  }
  editHorario(horario: Horario): void{
    if (horario && horario.id) {

    }
  }

  deleteHorario(horario: Horario): void{
    if (horario && horario.id) {
      this.horarioService.eliminarHorario(horario.id).subscribe({
        next: dato => console.log(dato),
        error: msg => {
          console.error("Hubo un error:");
          console.error(msg);
        }
      });
    }
    this.router.navigate(['/conductor/list']);
  }

  onSelectHorario(horario: Horario, selection: boolean) {
    this.selectionChangedHorarios.emit(this.selection);
    if (selection == true){
      this.horariosSelecionadosUnicas?.push(horario)
    } else {
      this.horariosSelecionadosUnicas?.splice(this.horariosSelecionadosUnicas?.indexOf(horario), 1);
    }
    this.horariosSelecionados.emit(this.horariosSelecionadosUnicas)
  }

  // busesConductor(conductor: Conductor): void{
  //   if (conductor && conductor.id) {
  //     this.router.navigate(['/trabajo/view', conductor.id]);
  //   }
  // }
}
