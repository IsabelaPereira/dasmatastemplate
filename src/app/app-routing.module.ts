import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './pages/site/master/frame.page';
import { HomePageComponent } from './pages/site/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: HomePageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
