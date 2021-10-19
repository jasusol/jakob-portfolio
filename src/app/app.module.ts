import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ScubaInfoComponent } from './scuba-info/scuba-info.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProgrammerInfoComponent } from './programmer-info/programmer-info.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'scuba-info', component: ScubaInfoComponent },
  { path: 'programmer-info', component: ProgrammerInfoComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    ScubaInfoComponent,
    HomeComponentComponent,
    ProgrammerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
