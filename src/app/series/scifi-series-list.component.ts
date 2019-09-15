import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISeries } from './series.model';
import { SeriesService } from './series.service';
import { TOASTR_TOKEN, Toastr } from '../shared';

@Component({
  templateUrl: './scifi-series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class ScifiSeriesListComponent implements OnInit {
  scifiSeries: ISeries[];
  recommendedSeries: ISeries;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seriesService: SeriesService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.scifiSeries = this.route.snapshot.data["series"]['scifi'];
  }

  redirectToAddSeries() {
    this.router.navigate(['series/add']);
  }

  redirectToActionSeries() {
    this.router.navigate(['series/action']);
  }

  redirectToComedySeries() {
    this.router.navigate(['series/comedy']);
  }

  removeSeries(event: any) {
    const seriesId = event.target.id;
    this.seriesService.removeSeries(seriesId, 'scifi', this.scifiSeries);
    this.scifiSeries = this.scifiSeries.filter(serie => serie.id !== +seriesId);
    this.toastr.success('The TV Series has been removed!');
  }

  recommendSeries() {
    const recommendation = Math.floor(Math.random() * this.scifiSeries.length) + 1;
    this.recommendedSeries = this.scifiSeries.find((item) => +item.id === recommendation);
  }
}
