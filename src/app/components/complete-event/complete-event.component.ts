import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-complete-event',
	standalone: true,
	imports: [],
	templateUrl: './complete-event.component.html',
	styleUrl: './complete-event.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteEventComponent {}
