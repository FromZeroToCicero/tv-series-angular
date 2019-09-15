import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  ActionSeriesListComponent,
  SeriesService,
  SeriesListResolver,
  ComedySeriesListComponent,
  ScifiSeriesListComponent,
  CreateSeriesComponent
} from './series';
import { TOASTR_TOKEN, Toastr, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './shared';

import { Error404Component } from './error/404.component';
import { FirstPageComponent } from './firstpage/firstpage.component';
import { appRoutes } from './routes';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    ActionSeriesListComponent,
    ComedySeriesListComponent,
    ScifiSeriesListComponent,
    Error404Component,
    CreateSeriesComponent,
    FirstPageComponent,
    ModalTriggerDirective,
    SimpleModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SeriesService,
    SeriesListResolver,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: 'canDeactivateCreateSeries', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateSeriesComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  } else {
    return true;
  }
}
