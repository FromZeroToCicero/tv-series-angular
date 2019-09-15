import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISeries } from './series.model';
import { SeriesService } from './series.service';
import { TOASTR_TOKEN, Toastr } from '../shared';

@Component({
  templateUrl: './comedy-series-list.component.html',
  styleUrls: ['./series-list.component.css']
})

export class ComedySeriesListComponent implements OnInit {
  comedySeries: ISeries[];
  recommendedSeries: ISeries;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seriesService: SeriesService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.comedySeries = this.route.snapshot.data["series"]['comedy'];
  }

  redirectToAddSeries() {
    this.router.navigate(['series/add']);
  }

  redirectToActionSeries() {
    this.router.navigate(['series/action']);
  }

  redirectToScifiSeries() {
    this.router.navigate(['series/scifi']);
  }

  removeSeries(event: any) {
    const seriesId = event.target.id;
    this.seriesService.removeSeries(seriesId, 'comedy', this.comedySeries);
    this.comedySeries = this.comedySeries.filter(serie => serie.id !== +seriesId);
    this.toastr.success('The TV Series has been removed!');
  }

  recommendSeries() {
    const recommendation = Math.floor(Math.random() * this.comedySeries.length) + 1;
    this.recommendedSeries = this.comedySeries.find((item) => +item.id === recommendation);
  }
}
