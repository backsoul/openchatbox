import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateKeyComponent } from './components/generate-key/generate-key.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: GenerateKeyComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
