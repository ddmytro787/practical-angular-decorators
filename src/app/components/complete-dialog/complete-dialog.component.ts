import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Complete } from '../../decorators/complete.decorator';

@Component({
	selector: 'app-complete-event-dialog',
	standalone: true,
	imports: [MatDialogModule, MatButtonModule],
	templateUrl: './complete-dialog.component.html',
	styleUrl: './complete-dialog.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteDialogComponent {
	@Complete @Output() event = new EventEmitter();
}
