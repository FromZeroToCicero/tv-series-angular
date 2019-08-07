import { Routes } from '@angular/router';

import {
  ActionSeriesListComponent,
  SeriesListResolver,
  ComedySeriesListComponent,
  ScifiSeriesListComponent,
  CreateSeriesComponent
} from './series';
import { Error404Component } from './error/404.component';
import { FirstPageComponent } from './firstpage/firstpage.component';

export const appRoutes: Routes = [
  {
    path: 'series/add',
    component: CreateSeriesComponent,
    canDeactivate: ['canDeactivateCreateSeries']
  },
  {
    path: 'series/action',
    component: ActionSeriesListComponent,
    resolve: { series: SeriesListResolver }
  },
  {
    path: 'series/comedy',
    component: ComedySeriesListComponent,
    resolve: { series: SeriesListResolver }
  },
  {
    path: 'series/scifi',
    component: ScifiSeriesListComponent,
    resolve: { series: SeriesListResolver }
  },
  {
    path: 'blockster',
    component: FirstPageComponent
  },
  { path: 'series', redirectTo: '/series/action', pathMatch: 'full' },
  { path: '', redirectTo: '/blockster', pathMatch: 'full' },
//   {
//     path: 'series/:id',
//     component: SeriesDetailsComponent,
//     resolve: { series: SeriesResolver }
//   },
  { path: '404', component: Error404Component }
];
