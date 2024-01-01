import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CompleteDialogComponent } from '../complete-dialog/complete-dialog.component';
import { finalize } from 'rxjs';

@Component({
	selector: 'app-complete-event',
	standalone: true,
	imports: [MatButtonModule],
	templateUrl: './complete.component.html',
	styleUrl: './complete.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteComponent {
	constructor(private dialog: MatDialog) {}

	openDialog() {
		this.dialog
			.open(CompleteDialogComponent, { minWidth: '600px' })
			.componentInstance.event.pipe(finalize(() => console.log('event completed')))
			.subscribe(console.log);
	}
}
