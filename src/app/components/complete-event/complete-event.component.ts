import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CompleteEventDialogComponent } from '../complete-event-dialog/complete-event-dialog.component';
import { finalize } from 'rxjs';

@Component({
	selector: 'app-complete-event',
	standalone: true,
	imports: [MatButtonModule],
	templateUrl: './complete-event.component.html',
	styleUrl: './complete-event.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteEventComponent {
	constructor(private dialog: MatDialog) {}

	openDialog() {
		this.dialog
			.open(CompleteEventDialogComponent, { minWidth: '600px' })
			.componentInstance.event.pipe(finalize(() => console.log('event completed')))
			.subscribe(console.log);
	}
}
