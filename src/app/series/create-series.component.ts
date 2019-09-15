import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISeries } from './';
import { SeriesService } from './series.service';
import { TOASTR_TOKEN, Toastr } from '../shared';

@Component({
    templateUrl: './create-series.component.html',
    styleUrls: ['./create-series.component.css']
})

export class CreateSeriesComponent implements OnInit {
    newSeriesForm: FormGroup;
    name: FormControl;
    type: FormControl;
    launch: FormControl;
    currentSeason: FormControl;
    img: FormControl;
    actors: FormControl;
    isDirty = true;

    constructor(private seriesService: SeriesService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.type = new FormControl('', Validators.required);
        this.launch = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
        this.currentSeason = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
        this.img = new FormControl('', [Validators.required, Validators.pattern('.*\/.*.(png|jpg)')]);
        this.actors = new FormControl('', [Validators.required, Validators.maxLength(400)]);

        this.newSeriesForm = new FormGroup({
            name: this.name,
            type: this.type,
            launch: this.launch,
            currentSeason: this.currentSeason,
            img: this.img,
            actors: this.actors
        });
    }

    saveSeries(formValues) {
        const series: ISeries = {
            name: formValues.name,
            launch: +formValues.launch,
            currentSeason: +formValues.currentSeason,
            actors: [formValues.actors],
            id: undefined,
            img: formValues.img
        };
        this.seriesService.saveSeries(series, formValues.type).subscribe(() => {
          this.isDirty = false;
          this.toastr.success('New TV Series added!');
          this.router.navigate([`series/${formValues.type}`]);
        });
    }

    cancel() {
        this.router.navigate(['series/action']);
    }
}
