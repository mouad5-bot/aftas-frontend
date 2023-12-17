import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MemberComponent} from "./components/member/member-list/member.component";
import {CompetitionAddComponent} from "./components/competition/competition-add/competition-add.component";
import {CompetitionComponent} from "./components/competition/competition-list/competition.component";
import {HuntingComponent} from "./components/hunting/hunting-list/hunting.component";
import {FishComponent} from "./components/fish/fish-list/fish.component";
import {MemberAddComponent} from "./components/member/member-add/member-add.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: 'member/list', component: MemberComponent },
      { path: 'member/add', component: MemberAddComponent},

      { path: 'competition/list', component: CompetitionComponent},
      { path: "competition/add", component: CompetitionAddComponent},

      { path: 'hunting/list', component: HuntingComponent },

      { path: 'fish/list', component: FishComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
