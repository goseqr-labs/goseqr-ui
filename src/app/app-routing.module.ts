import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemDefinitionComponent} from "./pages/item-definition/item-definition.component";
import {GuideComponent} from "./pages/guide/guide.component";
import {TaraComponent} from "./pages/tara/tara.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {ListItemDefinitionsComponent} from "./pages/list-item-definitions/list-item-definitions.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'item-definition', component: ItemDefinitionComponent},
  {path: 'list-item-definitions', component: ListItemDefinitionsComponent},
  {path: 'tara', component: TaraComponent},
  {path: 'help', component: GuideComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
