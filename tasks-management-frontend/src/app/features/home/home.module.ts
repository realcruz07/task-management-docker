import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
