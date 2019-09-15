import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SeriesService } from './series.service';

@Injectable()
export class SeriesListResolver implements Resolve<any> {
  constructor(private seriesService: SeriesService) {}

  resolve() {
    return this.seriesService.getAllSeries();
  }
}
