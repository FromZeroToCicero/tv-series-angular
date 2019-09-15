import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISeries } from './series.model';
import { SeriesService } from './series.service';
import { TOASTR_TOKEN, Toastr } from '../shared';

@Component({
  templateUrl: './action-series-list.component.html',
  styleUrls: ['./series-list.component.css']
})

export class ActionSeriesListComponent implements OnInit {
  actionSeries: ISeries[];
  recommendedSeries: ISeries;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seriesService: SeriesService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.actionSeries = this.route.snapshot.data["series"]['action'];
  }

  redirectToAddSeries() {
    this.router.navigate(['series/add']);
  }

  redirectToComedySeries() {
    this.router.navigate(['series/comedy']);
  }

  redirectToScifiSeries() {
    this.router.navigate(['series/scifi']);
  }

  removeSeries(event: any) {
    const seriesId = event.target.id;
    this.seriesService.removeSeries(seriesId, 'action', this.actionSeries);
    this.actionSeries = this.actionSeries.filter(serie => serie.id !== +seriesId);
    this.toastr.success('The TV Series has been removed!');
  }

  recommendSeries() {
    const recommendation = Math.floor(Math.random() * this.actionSeries.length) + 1;
    this.recommendedSeries = this.actionSeries.find((item) => +item.id === recommendation);
  }
}
