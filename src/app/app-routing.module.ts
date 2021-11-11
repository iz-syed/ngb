import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:BlankComponent
  // },
  {
    path:'',
    component:FullComponent,
    children: [
      {
        path:'',
        component:IndexComponent
      },
      {
        path:'index',
        component:IndexComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
