import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Home/homeview.component";
import {ConductorViewComponent} from "./conductor/conductor-view/conductor-view.component";
import {ConductorListComponent} from "./conductor/conductor-list/conductor-list.component";
import {ConductorSearchComponent} from "./conductor/conductor-search/conductor-search.component";
import {ConductorEditComponent} from "./conductor/conductor-edit/conductor-edit.component";
import {ConductorCreateComponent} from "./conductor/conductor-create/conductor-create.component";
import {BusListComponent} from "./bus/bus-list/bus-list.component";
import {BusViewComponent} from "./bus/bus-view/bus-view.component";
import {RutaListComponent} from "./ruta/ruta-list/ruta-list.component";
import {RutaViewComponent} from "./ruta/ruta-view/ruta-view.component";
import {RutaEditComponent} from "./ruta/ruta-edit/ruta-edit.component";
import {BusEditComponent} from "./bus/bus-edit/bus-edit.component";
import {BusCreateComponent} from "./bus/bus-create/bus-create.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'conductor/list', component: ConductorListComponent },
  { path: 'conductor/view/:id', component: ConductorViewComponent },
  { path: 'conductor/edit/:id', component: ConductorEditComponent },
  { path: 'conductor/search', component: ConductorSearchComponent },
  { path: 'conductor/create', component: ConductorCreateComponent },
  { path: 'bus/list', component: BusListComponent },
  { path: 'bus/view/:id', component: BusViewComponent },
  { path: 'bus/edit/:id', component: BusEditComponent },
  { path: 'bus/create', component: BusCreateComponent },
  { path: 'ruta/list', component: RutaListComponent },
  { path: 'ruta/view/:id', component: RutaViewComponent },
  { path: 'ruta/edit/:id', component: RutaEditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
