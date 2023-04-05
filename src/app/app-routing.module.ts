import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Home/homeview.component";
import {ConductorViewComponent} from "./conductor/conductor-view/conductor-view.component";
import {ConductorListComponent} from "./conductor/conductor-list/conductor-list.component";
import {ConductorSearchComponent} from "./conductor/conductor-search/conductor-search.component";
import {ConductorEditComponent} from "./conductor/conductor-edit/conductor-edit.component";
import {ConductorCreateComponent} from "./conductor/conductor-create/conductor-create.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'conductor/list', component: ConductorListComponent },
  { path: 'conductor/view', component: ConductorViewComponent },
  { path: 'conductor/search', component: ConductorSearchComponent },
  { path: 'conductor/edit', component: ConductorEditComponent },
  { path: 'conductor/create', component: ConductorCreateComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
