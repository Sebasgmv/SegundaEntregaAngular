import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/homeview.component';
import { ConductorViewComponent } from './conductor/conductor-view/conductor-view.component';
import { ConductorListComponent } from './conductor/conductor-list/conductor-list.component';
import { ConductorCreateComponent } from './conductor/conductor-create/conductor-create.component';
import { ConductorEditComponent } from './conductor/conductor-edit/conductor-edit.component';
import { ConductorSearchComponent } from './conductor/conductor-search/conductor-search.component';
import { BusCreateComponent } from './bus/bus-create/bus-create.component';
import { BusEditComponent } from './bus/bus-edit/bus-edit.component';
import { BusListComponent } from './bus/bus-list/bus-list.component';
import { BusSearchComponent } from './bus/bus-search/bus-search.component';
import { BusViewComponent } from './bus/bus-view/bus-view.component';
import { RutaCreateComponent } from './ruta/ruta-create/ruta-create.component';
import { RutaEditComponent } from './ruta/ruta-edit/ruta-edit.component';
import { RutaListComponent } from './ruta/ruta-list/ruta-list.component';
import { RutaSearchComponent } from './ruta/ruta-search/ruta-search.component';
import { RutaViewComponent } from './ruta/ruta-view/ruta-view.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { EstacionCreateComponent } from './estacion/estacion-create/estacion-create.component';
import { EstacionListComponent } from './estacion/estacion-list/estacion-list.component';
import { EstacionViewComponent } from './estacion/estacion-view/estacion-view.component';
import { EstacionEditComponent } from './estacion/estacion-edit/estacion-edit.component';
import { HorarioCreateComponent } from './horario/horario-create/horario-create.component';
import { HorarioEditComponent } from './horario/horario-edit/horario-edit.component';
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { HorarioViewComponent } from './horario/horario-view/horario-view.component';
import { TrabajoCreateComponent } from './trabajo/trabajo-create/trabajo-create.component';
import { TrabajoEditComponent } from './trabajo/trabajo-edit/trabajo-edit.component';
import { TrabajoListComponent } from './trabajo/trabajo-list/trabajo-list.component';
import { TrabajoViewComponent } from './trabajo/trabajo-view/trabajo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConductorViewComponent,
    ConductorListComponent,
    ConductorCreateComponent,
    ConductorEditComponent,
    ConductorSearchComponent,
    BusCreateComponent,
    BusEditComponent,
    BusListComponent,
    BusSearchComponent,
    BusViewComponent,
    RutaCreateComponent,
    RutaEditComponent,
    RutaListComponent,
    RutaSearchComponent,
    RutaViewComponent,
    EstacionCreateComponent,
    EstacionListComponent,
    EstacionViewComponent,
    EstacionEditComponent,
    HorarioCreateComponent,
    HorarioEditComponent,
    HorarioListComponent,
    HorarioViewComponent,
    TrabajoCreateComponent,
    TrabajoEditComponent,
    TrabajoListComponent,
    TrabajoViewComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
