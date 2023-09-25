import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemDefinitionComponent} from "./pages/item-definition/item-definition.component";
import {GuideComponent} from "./pages/guide/guide.component";
import {TaraComponent} from "./pages/tara/tara.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {ListItemDefinitionsComponent} from "./pages/list-item-definitions/list-item-definitions.component";
import {AuthGuardService} from "./_service/auth-guard.service";
import {LoginComponent} from "./pages/login/login.component";
import {ListTaraEntriesComponent} from "./pages/list-tara-entries/list-tara-entries.component";
import {ListTaraItemComponent} from "./pages/list-tara-item/list-tara-item.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'Home'
    }
  },
  {
    path: 'item-definition', component: ItemDefinitionComponent, canActivate: [AuthGuardService],
    data: {
      title: 'Home'
    }
  },
  {
    path: 'list-item-definitions', component: ListItemDefinitionsComponent, canActivate: [AuthGuardService],
    data: {
      title: 'Home'
    }
  },
  {
    path: 'tara', component: TaraComponent, canActivate: [AuthGuardService],
    data: {
      title: 'Threat Analysis and Risk Assessment'
    }
  },
  {
    path: 'list-tara-entries', component: ListTaraEntriesComponent, canActivate: [AuthGuardService],
    data: {
      title: 'Tara Entries'
    }
  },
  {
    path: 'list-tara-item-details', component: ListTaraItemComponent, canActivate: [AuthGuardService],
    data: {
      title: 'Tara Item Details'
    }
  },
  {path: 'help', component: GuideComponent},
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  }
];


//const routes: Routes = [
//  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
//  {path: 'item-definition', component: ItemDefinitionComponent},
//  {path: 'list-item-definitions', component: ListItemDefinitionsComponent},
//  {path: 'tara', component: TaraComponent},
//  {path: 'help', component: GuideComponent},
//  {path: '', redirectTo: 'home', pathMatch: 'full'},
//  {path: '**', component: PageNotFoundComponent}
//];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

