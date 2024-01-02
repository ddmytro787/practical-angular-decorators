import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
	MAT_DIALOG_DATA,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TitleCasePipe } from '@angular/common';

@Component({
	selector: 'app-confirm-dialog',
	standalone: true,
	imports: [
		MatButtonModule,
		MatDialogActions,
		MatDialogClose,
		MatDialogContent,
		MatDialogTitle,
		MatIconModule,
		TitleCasePipe,
	],
	templateUrl: './confirm-dialog.component.html',
	styleUrl: './confirm-dialog.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public message: string) {}
}
