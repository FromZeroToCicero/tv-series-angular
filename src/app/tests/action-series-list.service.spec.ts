// import { TestBed, async, ComponentFixture } from '@angular/core/testing';
// import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
// import { ActionSeriesListComponent } from '../series/action-series-list.component';
// import { ISeries } from '../series/series.model';
// import { By } from '@angular/platform-browser';

// describe('SessionListComponent', () => {
//     let fixture: ComponentFixture<SessionsListComponent>,
//         component: SessionsListComponent,
//         element: HTMLElement,
//         debugElement: DebugElement;

//     beforeEach(async(() => {
//         let mockAuthService = {
//             isAuthenticated: () => true,
//             currentUser: {
//                 userName: 'Joe'
//             }
//         };
//         let mockVoterService = {
//             userHasVoted: () => true
//         };
//         TestBed.configureTestingModule({
//             imports: [],
//             declarations: [SessionsListComponent, UpvoteComponent, DurationPipe, CollapsibleWellComponent],
//             providers: [{ provide: AuthService, useValue: mockAuthService }, { provide: VoterService, useValue: mockVoterService }],
//             schemas: [NO_ERRORS_SCHEMA]
//         })
//     }))

//     beforeEach(() => {
//         fixture = TestBed.createComponent(SessionsListComponent);
//         component = fixture.componentInstance;
//         debugElement = fixture.debugElement;
//         element = fixture.nativeElement;
//     })

//     describe('initial display', () => {
//         it('should have the correct session title', () => {
//             component.sessions = [{ id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}];
//             component.filterBy = 'all';
//             component.sortBy = 'name';
//             component.eventId = 4;
//             component.ngOnChanges();
//             fixture.detectChanges();
//             // expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
//             expect(debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
//         })
//     })
// })