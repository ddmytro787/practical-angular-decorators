import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CompleteEvent } from '../../decorators/complete-event.decorator';

@Component({
	selector: 'app-complete-event-dialog',
	standalone: true,
	imports: [MatDialogModule, MatButtonModule],
	templateUrl: './complete-event-dialog.component.html',
	styleUrl: './complete-event-dialog.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteEventDialogComponent {
	@CompleteEvent @Output() event = new EventEmitter();
}
