import { SeriesService } from '../series/series.service';
import { ISeries } from '../series/series.model';
import { of } from 'rxjs';
import { series } from './fixtures';

describe('SeriesService', () => {
// tslint:disable-next-line: prefer-const
    let seriesService: SeriesService;
    let mockHttp;
    let testingSeries: ISeries[];

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post', 'get']);
        seriesService = new SeriesService(mockHttp);
        testingSeries = series;
    });
    describe('removeSeries function', () => {
        it('Should remove tv series from list of series', () => {
            mockHttp.delete.and.returnValue(of({}));
            const remainingSeries = seriesService.removeSeries('1', 'action', testingSeries);
            expect(remainingSeries.length).toBe(5);
        });

        it('Should call http.delete with the right url', () => {
            mockHttp.delete.and.returnValue(of({}));
            seriesService.removeSeries('3', 'action', testingSeries);
            expect(mockHttp.delete).toHaveBeenCalledWith('http://localhost:3000/action/3');
        });
    });

    // describe('saveSeries function', () => {
    //     it('should add tv series to the list of series', () => {
    //         const newSeries = {
    //             id: 7,
    //             name: 'Mr. Robot',
    //             launch: 2015,
    //             currentSeason: 3,
    //             actors: ["Rami Malek"],
    //             img: "ceva.png"
    //         };
    //         mockHttp.post.and.returnValue(of({}));
    //         const newList = seriesService.saveSeries(newSeries, 'action', testingSeries);
    //         expect(newList.length).toBe(7);
    //         expect(newList[6].name).toBe('Mr. Robot');
    //     });
    //     it('should call http.post with the right url', () => {
    //         const newSeries = {
    //             id: 7,
    //             name: 'Mr. Robot',
    //             launch: 2015,
    //             currentSeason: 3,
    //             actors: ["Rami Malek"],
    //             img: "ceva.png"
    //         };
    //         mockHttp.post.and.returnValue(of({}));
    //         seriesService.saveSeries(newSeries, 'action', testingSeries);
    //         expect(mockHttp.post).toHaveBeenCalledWith('http://localhost:3000/action', newSeries, jasmine.any(Object));
    //     });
    // });
});
