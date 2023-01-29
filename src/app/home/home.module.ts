import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GenerateKeyComponent } from './components/generate-key/generate-key.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, GenerateKeyComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, RouterModule],
  providers: [],
})
export class HomeModule {}
