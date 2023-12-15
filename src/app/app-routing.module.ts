import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MemberComponent} from "./components/member/member.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: 'member', component: MemberComponent },
      // { path: 'competition', component:  },
      // { path: 'hunting', component:  },
      // { path: 'fish', component:  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
